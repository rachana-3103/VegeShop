const { ALLREADY_REGISTER } = require("../../helpers/messages");
const { userSignup } = require("./user.helper");
const supertest = require("supertest");
const app = require("../../app");
const request = supertest(app);
const { Client } = require("pg");
jest.mock("pg", () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});

describe("User Tests", () => {
  let client;
  beforeEach(() => {
    client = new Client();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("signup should work as expected", async () => {
    client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });
    const expectedPayload = {
      code: 200,
      err: false,
      msg: "Signup Successfully.",
      data: {
        id: "10a8cc89-cb03-4969-8a90-540308d99942",
        name: "rachana",
        country_code: "+91",
        phone_number: "8980423855",
        email: "rachana.prajapati@bacancy.com",
        sms_verified: false,
        device_token: null,
        otp_generated_at: "2022-06-27T04:47:00.000Z",
        unit: null,
        notification: true,
        createdAt: "2022-06-27T04:47:09.010Z",
        updatedAt: "2022-06-27T04:47:09.010Z",
      },
    };

    const event = {
      body: {
        name: "rachana1",
        email: "rachana.prajapati@bacancy.com",
        password: "Test@123",
        countryCode: "+91",
        phoneNumber: "8980423855",
      },
    };

    const data = await userSignup(event);
    console.log("~ data", data);
    expect(client.connect).toBeCalledTimes(1);
    // expect(data.msg).toBe(expectedPayload.msg);
    // expect(data.code).toBe(expectedPayload.code);
    // expect(data.data).toStrictEqual(expectedPayload.data);
  });

  it("signup already registered", async () => {
    const expectedPayload = {
      err: true,
      code: 400,
      data: null,
      msg: ALLREADY_REGISTER,
    };

    const event = {
      body: {
        name: "rachana",
        email: "rachana.prajapati@bacancy.com",
        password: "Test@123",
        countryCode: "+91",
        phoneNumber: "8980423855",
      },
    };

    const data = await userSignup(event);
    expect(data.code).toBe(expectedPayload.code);
    expect(data.msg).toBe(expectedPayload.msg);
  });

  it("signup Internal server error", async () => {
    const event = {
      body: {
        name: "rachana",
        email: "rachana.prajapati@bacancy.com",
        password: "Test@123",
        countryCode: "+91",
        phoneNumber: "8980423855",
      },
    };

    const data = await userSignup(event);
    expect(data.code).toBe(500);
  });
});
