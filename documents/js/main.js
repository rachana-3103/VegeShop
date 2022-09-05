let data = [
    {   
        "Guidance":[
            {
            name:"Prevention",
            "Category": [
                {
                    "name":"Personal Safety",
                    "keyName":"PersonalSafety",
                    "gData":[ 
                        {
                            id:1,
                            title:"Cell phone use",
                            imageUrl: "img1.jpg",
                            about:"When travelling in economically and socially challenged locations, minimise the use of your cell phone in public. It attracts attention and marks you as a person not from the area.",
                            description:`<p>Move to a more discreet location to check your cell. If on the street, step aside out of the flow of foot traffic. <br />
                            Use a location which has good visibility on any person approaching you. <br />
                            Ensure your cell phone is charged before you leave for a location. </p>`
                        },{
                            id:2,
                            title:"Emergency `go` bag",
                            imageUrl: "bag.jpg",
                            about:"The `go bag` is everything you need to assist you in an unplanned or emergency event. It can save your life.",
                            description:`<p>The contents cost little, but their value can be priceless.  <br />

                            It is advised to store a ‘go bag’ in a vehicle or accessible location. <br />
                            Contents to consider: 
                            </p>
                            <ul class="ul_custom_1">                              
                                <li>First aid kit</li>
                                <li>High visibility vest</li>
                                <li>Bottled water</li>
                                <li>Toilet paper</li>
                                <li>Whistle</li>
                                <li>Duct tape</li>
                                <li>Swiss Army style pocket knife</li>
                                <li>Waterproof matches</li>
                                <li>Heavy work gloves – leather ideally</li>
                                <li>Torch with replacement batteries</li>
                                <li>Cash – notes and coins</li>
                                <li>Pocket knife</li>
                                <li>Vehicle break glass hammer / seat belt cutter</li>
                                <li>Fire blanket (for remote and hot weather locations)</li>
                                <li>Small signalling mirror</li>
                                <li>Sling for bag, if it’s not a backpack</li>
                            </ul> `
                        },{
                            id:3,
                            title:"Meetings at night",
                            imageUrl: "meetings_at_night.jpg",
                            about:"Meetings at night can increase the risk for the unfamiliar.",
                            description:`<p>Actions that can be undertaken include: </p>
                            <ul class="ul_custom_1">
                                <li>Walk over an address to familiarise yourself with the surrounds.</li>
                                <li>Book a taxi from / to the next location.</li>
                                <li>Be escorted by another person until you are in a taxi.</li>
                                <li>At a venue and if you are not familiar with the surrounds, ask people about the local area.
                                 Local knowledge is gold.</li>                               
                            </ul>`
                        },
                        {
                            id:4,
                            title:"Free Wi-Fi",
                            imageUrl: "wifi.jpg",
                            about:"Avoid using free WIFI where possible in public areas.",
                            description:`<p>The WIFI named ‘Free WIFI’ may be controlled by criminals seeking to obtain banking or personal data. </p>
                            <p>
                            If you have no data available on your phone plan, consider waiting until you return to the hotel or a secure location.
                             </p>`
                        },
                        {
                            id:5,
                            title:"ATM security",
                            imageUrl: "security.jpg",
                            about:"Withdraw cash during the day if possible.",
                            description:`<p>Ideally use brand name bank ATMs which are in openly visible locations with pedestrian traffic and good lighting.</p>

                            <p>If you are in an ATM room, common in cold weather environments, scan the environment before you go in and monitor. If you don’t feel safe, cancel the transaction, and leave. </p>
                            
                            <p>Counter skimming hardware should be fitted to the ATM – keypad cover, with the screen unable to be viewed by another person. </p>
                            
                           <p>Avoid ATM’s where your actions can be viewed above or recorded. </p>`
                        },
                        {
                            id:6,
                            title:"Managing cash",
                            imageUrl: "managing.jpg",
                            about:"Different countries have different preferred payment methods, card, cash or both.",
                            description:`<p>Before you go, obtain currency for the destination you intend to visit. Take enough cash to support you for a number of days, to minimise ATM withdrawals. 

                            <p>Options include ordering the foreign currency from a bank or currency provider. </p>
                            
                            <p>Don’t leave obtaining foreign currency to the last minute. Often a booking notice is required to collect the currency. Obtaining cash at the last minute i.e. airport usually incurs additional fees. </p>
                            
                            <p class="mb-0"><strong>General</strong></p>                            
                            <p> Keep a quantity of cash on your person. Not all locations take card or cell phone based payments.</p>
                            <p class="mb-0">Choose to store cash overtly or covertly.</p>
                            <ul class="ul_custom_1">
                            <li>Overly: wallet, purse</li>
                            <li>Covertly: folded and secured inside clothing, shoe</li>
                                                       
                        </ul>
                        <p>In the event your wallet/purse is stolen or lost, access the hidden currency, so you can get back to a hotel or known location.</p>
                            `
                        },
                        {
                            id:7,
                            title:"Avoiding conflict",
                            imageUrl: "conflict.jpg",
                            about:"Situation dependent, be aware of walking in or around crowds.",
                            description:`<p>If there is a distraction or crowd in your path of travel, block around (three sides of a square) and continue on.

                            Don’t stop walking if someone asks you for something like a question or cigarette. It is an often-used tactic by thieves, to you slow down and either pick pocket or commit a robbery.
                            </p>`
                        },
                        {
                            id:8,
                            title:"Street scapes",
                            imageUrl: "scapes.jpg",
                            about:"Read the street landscape. It helps you assess the risk level.",
                            description:`<p>As a general rule, city streets that include children and women suggest the area is safe for families.</p>

                            <p>If people are absent from an area you would expect to be populated, leave the area.</p>
                            
                            <p> Look for locations that are:
                            </p>
                            <ul class="ul_custom_1">
                            <li>Populated</li>
                            <li>Free movement</li>
                            <li>Well-lit at night</li>                                                       
                        </ul>
                            `
                        },
                        {
                            id:9,
                            title:"Backpacks and handbags",
                            imageUrl: "handbags.jpg",
                            about:"Consider the purpose and size of bags before you leave to travel. Larger bags can be a distraction when you don’t need it, and an opportunity for theft.                            ",
                            description:`<p>Place a handbag more towards your front and corner of your elbow. Cover the opening with your arm or hand.</p>

                            <p>If using a backpack, consider placing at your front, rather than on your back. This makes the bag less accessible to pick pockets.</p>
                            
                            <p> These options may reduce the risk of pickpockets and travel disruption.</p>`
                        },
                        {
                            id:10,
                            title:"Unfamiliar locations",
                            imageUrl: "locations.jpg",
                            about:"Depending on where you are going, a new location for some people can cause some anxiety, due to the unknown.",
                            description:`<p>If you are meeting people at a location, or trying to determine car parking, conduct a walk or drive over. This reduces the anxiety and increases your confidence.
                            </p>`
                        },
                        {
                            id:11,
                            title:"Sitting in public",
                            imageUrl: "public.jpg",
                            about:"How you sit in publc can impact whether you become a target for opportunistic theives.",
                            description:`<p>Sit in locations where you can clearly see people around or approaching you.  </p>

                            <p> Place any bags in front of you, on your lap, or where you have line of sight.  </p>
                            
                            <p> Thieves can position themselves beside you and steal items hung over a chair or placed on the ground, using their feet or an item to slide a bag towards them.
                            
                            </p>`
                        },
                        {
                            id:12,
                            title:"Suspicious persons",
                            imageUrl: "suspicious.jpg",
                            about:"A suspicious person is either one who is exhibiting suspicious behaviour, or who is in an area or doing something that is not normal. ",
                            description:`<p>he easiest option is to avoid contact with a person acting suspiciously.  </p>

                            <p> Block around them (three sided square) and continue on. </p>
                            
                            <p> Don’t continue through areas that reduce your freedom of movement such as an alley way or tunnel. </p>
                            
                            <p>  Walk in open areas which are well lit and populated if possible. </p>
                            
                            <p class="mb-1">Tips  </p>
                            <ul class="ul_custom_1">
                            <li>Don’t wear headphones.</li>
                            <li>Start thinking if/then. If they do this, I do this then.</li>
                                         
                        </ul> `
                        },
                        {
                            id:13,
                            title:"Car parks",
                            imageUrl: "parks.jpg",
                            about:"Where you park and when you return to exit, can impact your safety.",
                            description:`<p>Reduce your personal risk. Consider car parks that are:
                            </p>

                            <ul class="ul_custom_1">
                            <li>Well lit</li>
                            <li>Use CCTV.</li>
                            <li>Are colour coded for rapid car space identification and exit</li>  </ul>   
                            <p>If you are attending your vehicle late at night, attend with another person or share your live location on Aegis 24/7 with a contact, for peace of mind.
                            </p> `
                        },
                        {
                            id:14,
                            title:"Protective equipment",
                            imageUrl: "equipment.jpg",
                            about:"Attending industrial or non-office locations generally will require some form Personal Protective Equipment (PPE).",
                            description:`<p>Ask before you attend a location what PPE is required.   </p>
                            <p> Common PPE required:   </p>
                             <ul class="ul_custom_1">
                            <li>face mask up to FFP2 / N95</li>
                            <li>steel capped shoes</li>
                            <li>protective eye wear</li>
                            <li>high visibility vest</li>
                            <li>hard hat</li>
                            <li>ear protection, including ear buds or earmuffs</li>
                            </ul> `
                        },
                        {
                            id:15,
                            title:"Locating first aid kits",
                            imageUrl: "kits.jpg",
                            about:"First-aid kits help you handle the medical emergencies as quickly as possible. Knowing where they may be located can reduce the impact of injury.",
                            description:`<p>It is recommended that you undertake a first aid course prior to administering first aid, so you know the basics and do not cause further injury harms through lack of knowledge.
</p>
                            <p>First aid kits can be found:  </p>
                             <ul class="ul_custom_1">
                            <li>In most modern vehicles. In European countries it is mandatory to carry a kit in a vehicle</li>
                            <li>Tool of trade vehicles.</li>
                            <li>Most corporate offices.</li>
                             </ul>`
                        },
                        {
                            id:16,
                            title:"Hot locations",
                            imageUrl: "hot_locations.jpg",
                            about:"Wearing the right clothing for the environment can reduce the risk of interruption to your routine.",
                            description:`<p>Wear loose, lightweight, light-coloured clothing. </p>

                            <p> Stay in an air-conditioned indoor location as much as you can. </p>
                            
                            <p> Drink plenty of fluids even if you don't feel thirsty. </p>
                            
                            <p> Schedule outdoor activities outside of peak heat times. </p>
                            
                            <p> If you are working outside, start slowly and gradually increase your pace. </p>
                            
                            <p>  Wear a hat and apply sunscreen to prevent sunstroke. </p>
                            
                            <p> Let contacts know where you are and check in on a regular schedule
                            </p>`
                        },
                        {
                            id:17,
                            title:"Cold locations",
                            imageUrl: "cold_locations.jpg",
                            about:"Wearing the right clothing for the environment can reduce the risk of interruption to your routine.",
                            description:`<p>Wear clothing that is not tight on your person. Tight clothing reduces blood circulation. Warm blood needs to be circulated to the extremities.   </p>

                            <p> Wear:  </p>
                            <ul class="ul_custom_1">
                            <li>Inner and outer layers that will keep you dry</li>
                            <li>A hat or hood that covers your ears, and a knit mask for your face (if needed)</li>
                            <li>Waterproof and insulated boots</li>
                            <li>Waterproof and insulated gloves</li>
                             </ul>
                             <p>If you are working outdoors, carry extra clothes in case the ones you are wearing get wet.
                            Drink plenty of fluids even if you don't feel thirsty. </p>
                            <p>
                            Learn the signs and symptoms of cold weather illnesses and injuries.
                            </p>
                            <ul class="ul_custom_1">
                            <li>Take frequent breaks in a warm area</li>
                            <li>Work in pairs so you and your co-worker can spot the danger signs.</li>
                            <li>Notify your supervisor and get medical help immediately if you or another</li>
                            <li>worker has symptoms of hypothermia or another cold-related illness or</li>
                            <li>injury.</li>
                            <li>Remember – you are at a higher risk if you take certain medications, are in poor physical condition, or suffer from illnesses such as diabetes, hypertension, or cardiovascular disease.
                            </li>
                             </ul>`
                        }
                    ]
                },{
                    "name":"Travel",
                    "keyName":"Travel",
                    "gData":[ 
                        {
                            id:1,
                            title:"Before you travel",
                            imageUrl: "before.jpg",
                            about:"A few moments to copy key documents can prevent significant delays in your travel.",
                            description:`<p>Make photocopies and a softcopy (phone or laptop) of your: </p>
                            <p>Place them in an accessible and secure location that is with you. </p>
                            <ul class="ul_custom_1">
                            <li>Passport</li>
                            <li>Vaccine status</li>
                            <li>Travel details</li>
                            <li>Travel insurance</li> 
                             </ul>
                            <p>Keep copies with a trusted source before you travel. </p>`
                        },{
                            id:2,
                            title:"Clothing",
                            imageUrl: "clothing.jpg",
                            about:"Dress for the environment and economic conditions. Context based, the aim is to blend in and not draw attention to yourself.",
                            description:`<p>Wear non-descript clothing. Avoid wearing t-shirts with large logos, bright colours.</p>
                            <p> Wear minimal jewellery and high value items.</p>                            
                            <p> Wear sturdy shoes with grip.</p>                            
                            <p> In Islamic countries, research the local clothing requirements. Dress conservatively as a baseline. Consider for:</p>
                             <p>Males </p>
                             <ul class="ul_custom_1">
                            <li>Long pants</li>
                            <li>Collared shirt</li> 
                             </ul>
                             <p>Females</p>
                             <ul class="ul_custom_1">
                            <li>Clothing which covers top and bottom half of the body.</li>
                            <li>Take a headscarf</li>
                           
                             </ul>
                            <p>Females should make themselves aware of local dress requirements. Breaches may result in civil and criminal penalties. 
                            </p>`
                        },{
                            id:3,
                            title:"Street scams",
                            imageUrl: "scarms.jpg",
                            about:"Street scams are often encountered in tourist areas. The motivation is typically money or access to your lifestyle.",
                            description:`<p>If you are approached by unknown persons asking for money or people asking for a cigarette, consider continuing to walk on.</p> 
                            <p> It may be a tactic to engage and/or distract you and opportunity to pickpocket.</p>
                            <p>Be polite when declining.</p> 
                            <p>Be aware of other persons around you. Street scammers often work in pairs or groups.
                             </p>`
                        },{
                            id:4,
                            title:"Language",
                            imageUrl: "language.jpg",
                            about:"Tailor your language for the environment.",
                            description:`<p>Don’t use language or make gestures that could be interpreted as disrespectful or threatening.</p> 
                            <p>Consider not discussing personal topics that can potentially be divisive, like religion and political beliefs.</p>
                            <p>Avoid touching other persons. Gestures in your culture may cause offence and create issues that could result in intervention from the authorities.
                            </p>`
                        },{
                            id:5,
                            title:"Food hygiene",
                            imageUrl: "hygiene.jpg",
                            about:"Clean water and food can prevent illness and resulting delays to your daily routine or travel",
                            description:`<p>Consider where you buy your food when on the street. Vendors with high volume turnover reduce the risk of food poisoning.</p>
                            <p>Evaluate the hygiene and frequency of purchase of local food vendors, before consuming.</p>
                            <p>Identify whether it is safe to drink tap water or you need bottled water.</p>
                            <p>For developing countries, consider using water purification tablets.
                            </p>`
                        },{
                            id:6,
                            title:"Hire cars",
                            imageUrl: "hire.jpg",
                            about:"A hire car generally identifies you as a person not local to the area. Criminals identify this as an opportunity to engage in staged vehicle accidents, with the aim obtaining compensation or theft opportunities.  ",
                            description:`<p>Most hire car companies today have subtle logo branding, however some do not.</p>
                            <p>Situation dependent, consider covering up with tape or removing rental car stickers from the vehicle. </p>
                            <p>If you are using a rental vehicle, consider utilising hotel and conference centre valet parking. It avoids the need to walk back from an unknown parking garage.</p>
                            <p>When driving, place your luggage and any bags not needed, into the trunk. It reduces the likelihood of theft or injury in the event of an accident.</p>
                            </p>`
                        },{
                            id:7,
                            title:"At the airport",
                            imageUrl: "airport2.jpg",
                            about:"TMoving through the airport.    ",
                            description:`<p>Watch for your suitcase as it appears on the carousel. Don't hang back and wait for the crowds to disperse - you might find that someone else has already taken your bag. </p>
                            <p>Avoid changing quantities of money at airports, as thieves could be watching you. </p>
                            <p> Don't share taxis with strangers. </p>`
                        },{
                            id:8,
                            title:"Hotel precautions",
                            imageUrl: "hotel.jpg",
                            about:"Safety basics when staying at hotels",
                            description:`<p>When arranging to meet people you've never met before (such as business associates), wait for them in the lobby. Don't ask them to meet you in your room.</p>
                            <p>Use the ‘Do not disturb’ sign on your room when you are ‘out and about.’</p>
                            <p>Carry a plastic door wedge when travelling. Insert under the entrance door if circumstances require it. It makes it more difficult for an offender to enter the room.
                            </p>`
                        },{
                            id:9,
                            title:"Secret distress signal",
                            imageUrl: "secret.jpg",
                            about:"The hand gesture provides a way for a person to silently show they are in distress and would like someone to check in with them in a safe way.",
                            description:`<p>Consider the timing and your safety when making this silent gesture, to avoid alerting person(s) who may be threatening you</p>`
                        },{
                            id:10,
                            title:"Foreign authorities",
                            imageUrl: "authorities.jpg",
                            about:"Being stopped by police or government officals can be unnerving, more so in an unfamiliar location. Keep calm and open. Your body posture and keeping you hands in plain view will assist you.",
                            description:`<p>If not advised, politely ask why you have been stopped and where they are from (station / crime unit).</p>
                            <p>If police are in plain clothes or their badge number / name badge is not visible, consider asking to view police credentials.</p>
                            <p>Be prepared that in developing or socially challenged locations you may be asked to pay a bribe, after which you may be permitted to continue on.
                             </p>`
                        },{
                            id:11,
                            title:"Remote locations",
                            imageUrl: "remote.jpg",
                            about:"If you are headed to a remote location, tell the plan to others. Share your Aegis 24/7 safety plan with others.",
                            description:`<p>If you are headed to a remote location, tell someone where you are going and when you are expected back. A simple and effective back up.</p>
                            <p>Aegis 24/7 requires an internet signal to operate, and you may go to a location with no signal.    </p>`
                        },{
                            id:12,
                            title:"Remote basics",
                            imageUrl: "remote_basics.jpg",
                            about:"If headed to a remote location, ensure you have sufficient water and food.",
                            description:`<p>If headed into a remote location, ensure that you have supplies of water and food. It is recommended to take more than 5.2 gallons (20L) of water of drinking water at a minimum. </p>
                            <p>The recommended daily fluid intake for males is one gallon (3.7L), females is 0.7 of a gallon (2.7L). The rate of consumption changes due to:
                             </p>
                             <ul class="ul_custom_1">
                            <li>Environment</li>
                            <li>Physical activity</li> 
                            <li>Age</li> 
                             </ul>`
                        },{
                            id:13,
                            title:"Fast exit",
                            imageUrl: "exit.jpg",
                            about:"Plans in life can unravel and you may need to leave a location quickly.",
                            description:`<p>Obtain a quantity of cash in your current and expected foreign jurisdictions.  </p>
                            <p>Wear dark coloured, non-descript clothing that doesn’t draw attention to yourself. </p>
                            <p>If you have tattoos conceal them as best you can. Wear a minimal amount of jewellery. </p>
                            <p>Wear a wristwatch. Your cell phone may lose battery charge and you need to make a travel connection. </p>
                            <p>Carry a backpack for passports and documentation. It’s light and user friendly. </p>
                            <p>Take carry on. People without luggage raise a red flag with authorities. Leave heavy luggage behind in storage with the hotel or similar. </p>
                            <p>Pay your debts. This reduces the risk of legacy problems and reports to the authorities, which can disrupt your travel plans
                             </p>`
                        },{
                            id:14,
                            title:"Health",
                            imageUrl: "health2.jpg",
                            about:"Managing your health when overseas can support you having a great experience.",
                            description:`<p>If you are taking prescription medicines overseas, ensure you have the prescription. Medicines legal in your country might not be legal elsewhere. Make copies before you leave with a trusted source. </p>
                            <p>Consider taking out health insurance for any journey outside your home country. The quality and expense of healthcare can differ greatly and an unplanned event can cost./<p>
                            <p>Some countries have reciprocal health care arrangements,
                            which means that you can get access to health care on a similar level to local persons.
                            Check if arrangements are in place with your country and destination before you leave./<p>`
                            
                        },{
                            id:15,
                            title:"Vaccinations",
                            imageUrl: "vaccinations.jpg",
                            about:"Before you travel, research the vaccine requirements for your destination. Since COVID-19, most countries at a minimum require mandatory vaccinations.",
                            description:`<p>Speak to your health care professional well in advance before you travel. Your body needs time to build up immunity. You may need several weeks to get all the doses of the vaccine.</p>
                            <p>Vaccines administered will often be dependent on the destinations you will be visiting.
                             </p>`
                        }

                    ]
                },{
                    "name":"Negative events",
                    "keyName":"NegativeEvents",
                    "gData":[ 
                        {
                            id:1,
                            title:"Workplace violence",
                            imageUrl: "violence2.jpg",
                            about:"If you are to attend a location where it is anticipated you may encounter workplace aggression or harassment, because of the nature of the discussion or past history, consider developing a planned response to minimise the risks.",
                            description:`<p>Create a safety plan in Aegis 24/7 and share your location with contacts so they have visibility on where you are.</p>
                            <p>Options:</p>
                            <ul class="ul_custom_1">
                            <li>Change the meeting location</li>
                            <li>Change the time of attendance</li>
                            <li>Consider other communication channels including remote contact</li>
                            <li>Schedule check in times with a line manager</li> 
                             </ul>`
                        },{
                            id:2,
                            title:"Sexual harassment",
                            imageUrl: "harassment.jpg",
                            about:"Sexual harassment is behaviour characterized by the making of unwelcome and inappropriate sexual remarks or physical advances in a workplace or other professional or social situation. <br /> Sexual harassment can be undertaken by both males and females.",  
                            description:`<ul class="ul_custom_1">
                            <li>Get informed. Research what is harassment. This way you can understand what is / isn’t harassment and warning signs.</li>
                            <li>Review workplace policies and procedures.</li>
                            <li>Change the landscape. If you’re not sure on a situation, have another person attend with you or move to an open and viewable location.</li>
                            <li>Tell the person your boundaries. </li>
                            <li>Find your voice. Tell the person to stop what they are doing.</li> 
                            <li>Seek help from a senior staff member or trusted person.</li>
                            <li>Identify confidential reporting tools in your workplace. This is often known as whistleblowing.</li>
                            <li> If more serious, consider contacting police.</li></ul>`
                        }
                    ]
                },{
                    "name":"Electrical",
                    "keyName":"Electrical",
                    "gData":[ 
                        {
                            id:1,
                            title:"Testing and tagging",
                            imageUrl: "tagging.jpg",
                            about:"Reduce the risk of fire in the workplace. Leave personal electrical items at home.",
                            description:`<p>If electrical items are needed at work, have them tested and tagged. See your facilities management.</p>
                            <p>The frequency of testing is depending on the operating environment.</p>
                            <p>Faulty equipment can result in electrocution or a fire hazard
                             </p>`
                        }
                    ]
                },{
                    "name":"Fire",
                    "keyName":"Fire",
                    "gData":[ 
                        {
                            id:1,
                            title:"Fire personal protective equipment",
                            imageUrl: "personal.jpg",
                            about:"Fire can move quickly from rural to urban areas. Be prepared.",
                            description:`<p>In fire risk prone areas, have an available store of basic fire safety clothing. This will enhance survivability.</p>
                            <p>Items to consider:</p>
                            <ul class="ul_custom_1">
                            <li>Portable extinguishers</li> 
                            <li>Fire blankets</li>
                            <li>Fireproof high visibility jackets</li>
                            <li>Protective eyewear</li>
                            <li>FFP2 / N95 face masks</li>
                            <li>Water in containers</li> 
                             </ul>`
                        },{
                            id:2,
                            title:"Communications",
                            imageUrl: "communications.jpg",
                            about:"Communications assist in defence and evacuation during fire events.",
                            description:`<p>Charge cell phones and equipment to maximise communications. Use sparingly.</p>
                            <p>Charge an external battery pack for your phone.</p>
                            <p>Be aware that infrastructure could become damaged or destroyed, inhibiting your ability to access and share information.
                             </p>`
                        },{
                            id:3,
                            title:"Monitor conditions",
                            imageUrl: "conditions.jpg",
                            about:"Monitor telecommunications about the location and speed of fire events.",
                            description:`<p>Maintain visual inspections of the surrounds.</p>
                            <p>Infrastructure may be damaged or destroyed and you may miss visual cues to leave. </p>
                            <p>Go outside and look for smoke every 30 minutes.</p>`
                        },{
                            id:4,
                            title:"Building protection",
                            imageUrl: "protection.jpg",
                            about:"Fighting a sustained forest/bush fire has risks. Evaluate the risk between life and property. Remember. People before property.",
                            description:`<p>If at work, liaise with facilities management prior to any expected fire risk period i.e. summer.</p>
                            <p>To defend a commercial location requires substantial planning and resources. If there are insufficient resources, secure the building(s) and leave at the earliest opportunity.
                            </p>`
                        }
                    ]
                },{
                    "name":"Flood",
                    "keyName":"Flood",
                    "gData":[ 
                        {
                            id:1,
                            title:"Flood PPE",
                            imageUrl: "flood.jpg",
                            about:"In flood prone areas, consider pre-purchasing Personal Protective Equipment (PPE) equipment. This will accelerate the recovery.",
                            description:`<p class="mb-1">Obtain and store wet weather PPE including: </p>
                            <ul class="ul_custom_1">
                            <li>Jacket, pants and boots</li>
                            <li>Waterproof torch</li> 
                            <li>Waterproof hat</li>
                             </ul>`
                        },{
                            id:2,
                            title:"Preparing buildings",
                            imageUrl: "buildings.jpg",
                            about:"If a building is in a flood risk location, preparation can accelerate the speed of recovery.",
                            description:`<p>If flood waters are approaching, tell contacts your location.</p>
                            <p>Create a safety plan in Aegis 24/7 and share with select contacts. This way your location will be visible to others.</p>
                            <p>If you can access your vehicle, get out your emergency ‘go bag’ to assist with the unplanned event. Don’t travel at the last minute.</p>
                            <p>Remove or transfer items outside, which are vulnerable to water or wind, before flood waters arrive.</p>
                            <p>If at work, contact your organisations facilities management to assess the viability of:</p>                             
                             <ul class="ul_custom_1">
                             <li>switching off the electrical supply if safe to do so and necessary. </li>
                             <li>switching off the gas supply if supplied to the site. This way if a pipe is breached, gas and fire risk has been reduced.</li>
                              </ul> 
                             `
                        },{
                            id:3,
                            title:"Monitor conditions",
                            imageUrl: "conditions2.jpg",
                            about:"Monitor news and social media for changes in flood conditions.",
                            description:`<p>Monitor telecommunications.</p>
                            <p>Maintain visual inspections of the surrounds.</p>
                            <p>Infrastructure may be damaged or destroyed and you may miss visual cues to leave. </p>
                            <p>Go outside and monitor conditions every 30 minutes
                             </p>`
                        }
                    ]
                },{
                    "name":"Wind",
                    "keyName":"Wind",
                    "gData":[ 
                        {
                            id:1,
                            title:"Object removal",
                            imageUrl: "removal2.jpg",
                            about:"Reduce the risk of objects moving during high wind and striking people or property.",
                            description:`<p>Secure materials or remove items to a secure location, away from the open.</p>`
                        },{
                            id:2,
                            title:"Safe room",
                            imageUrl: "safe.jpg",
                            about:"If unable to leave a building, move to the strongest, most secure part of the building.",
                            description:`<p>Select a part of a building which is the strongest and offers the greatest protection.</p>
                            <p>Tape windows in an ‘X’ pattern, from corner to corner. This reduces the risk of shattered glass.</p>
                            p>Stock your location with food, water and emergency personal protective equipment
                            </p>`
                        },{
                            id:3,
                            title:"Monitor conditions",
                            imageUrl: "monitor_conditions.jpg",
                            about:"Monitor telecommunications.",
                            description:`<p>Maintain visual inspections of the surrounds.</p>
                            <p>Infrastructure may be damaged or destroyed and you may miss visual cues to leave or stay.</p>
                            <p>Monitor conditions every 30 minutes.
                             </p>`
                        },{
                            id:4,
                            title:"Personal safety",
                            imageUrl: "personal_safety2.jpg",
                            about:"During severe wind events, look out for your personal safety.",
                            description:`<p>Create a safety plan in Aegis 24/7, so you can advised select contacts of your location. Update them on your status at regular intervals. </p>
                            <p>Avoid going near windows.</p>
                            <p>Avoid going outside.</p>
                            <p>Wear clothing for rain conditions and sturdy footwear</p>
                             </p>`
                        }
                    ]
                },{
                    "name":"Public emergency",
                    "keyName":"PublicEmergency",
                    "gData":[ 
                        {
                            id:1,
                            title:"Active shooter",
                            imageUrl: "shooter2.jpg",
                            about:"An active shooter is an individual actively engaged in killing or attempting to kill people in a populated area.",
                            description:`<p>It may not be an everyday event, but you can plan for it.</p>
                            <p>Be alert, not alarmed.</p>
                            <p>Be familiar with your options and how to respond. See information in Response - Active shooter for more information.
                            </p>`
                        },{
                            id:2,
                            title:"Information sharing",
                            imageUrl: "sharing2.jpg",
                            about:"Public emergencies such as fire or gas leaks occur. Monitor public communications including radio, social media.",
                            description:`<p>Follow directions of emergency responders and public officials in dynamic public emergencies. Dynamic events are those that are continuing to evolve.</p>
                            <p>Share the information with other persons and if at work, those in your organisation.
                             </p>`
                        }
                    ]
                },{
                    "name":"Health",
                    "keyName":"Health",
                    "gData":[ 
                        {
                            id:1,
                            title:"COVID19 and beyond",
                            imageUrl: "beyond.jpg",
                            about:"COVID-19 or similar may be around for some time.",
                            description:`<p>Best practice is to wear a mask in close proximity to other persons and sanitise your hands on contact with common surfaces.</p>
                            <p><strong>Wash</strong> or sanitize your hands. </p>
                            <p><strong>Wear</strong> a face cover or mask. </p>
                            <p><strong>Air</strong> your surrounds using open windows or doors.</p>
                            <p>Check local health authority requirements as to whether masks are required and if so, mask type.
                             </p>`
                        },{
                            id:2,
                            title:"Mental health",
                            imageUrl: "health3.jpg",
                            about:"Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.",
                            description:`<p>We all have good days and bad days. Then there are those days when something isn't quite right, you've got something on your mind, or things just seem too much. Whatever it may be, it can make a real difference having someone to talk to. </p>
                            <p>Seek to someone or counselling services at the first opportunity.</p>
                            </p>`
                        },{
                            id:3,
                            title:"Personal hygiene",
                            imageUrl: "hygiene3.jpg",
                            about:"Having the personal hygiene items can help prevent illness and delays to your travel.",
                            description:`<p>Take pocket hand sanitiser to minimise the risk of disease.</p>
                            <p>Take a number of different types of face masks i.e. surgical and N95/FFP2.</p>`
                        }
                    ]
                },{
                    "name":"Vehicles",
                    "keyName":"Vehicles",
                    "gData":[ 
                        {
                            id:1,
                            title:"Vehicle checks",
                            imageUrl: "checks.jpg",
                            about:"Regular inspection of a vehicle and its contents can reduce the impact of unplanned events",
                            description:`<p>Check fuel. If under ¼ of a tank, fill up.</p>
                            <p>If headed to an alpine area, ensure you have alpine fuel in the tank or additives, to ensure the fuel remains usable.</p>
                            <p>Check any indicator lights i.e. oil and action.</p>
                            <p>Check first aid kit(s) are in date.</p>
                            <p>Check any fire extinguishers have pressure and are in date.</p>
                            <p>Check and load an emergency ‘go bag.’</p> 
                            <p>If travelling to remote locations:</p>
                            <ul class="ul_custom_1">
                            <li>Check vehicle tires are suited to the terrain.</li>
                            <li>Tires are pumped to recommended pressures.</li> 
                            <li>For remote locations, carry a high visibility sheet, able to be placed on the top of a vehicle, so in the event of breakdown,
                             the vehicle can be spotted by aircraft.</li>
                             </ul>`
                        },{
                            id:2,
                            title:"Vehicle breakdown",
                            imageUrl: "breakdown.jpg",
                            about:"A vehicle can fail due to mechanical or electrical issues. The aim is to get the vehicle in a safe position, so the fault can be reviewed and if possible fixed.",
                            description:`<p>Safety first. Consider the environment and proximity of the vehicle to passing traffic.
                            <p>High speed and heavy traffic locations, it may be safer to stay inside your vehicle and call vehicle road side assistance.
                            <p>If safe to do so, consider:</p>
                            <ul class="ul_custom_1">
                            <li>Pushing the vehicle, or asking for help, off the roadway to avoid approaching vehicles colliding with your vehicle.</li>
                            <li>Tires are pumped to recommended pressures.</li> 
                            <li>If equipped, wear a reflective vest and deploy a road triangle 200 metres back from the vehicle. This is mandatory in some parts of Europ</li>
                            <li>Contact roadside assistance.</li>
                            <li>Search online for a tow truck or mobile mechanic.</li>
                            <li>Contact local police for assistance.</li>
                            <li>Leave the vehicle parked, secure and not causing a traffic hazard off to the side of the road for later recovery.</li>
                             </ul>`
                        },{
                            id:3,
                            title:"Intersections",
                            imageUrl: "intersections.jpg",
                            about:"Travelling through intersections is high risk. 50+% of collisions occur at or near intersections.",
                            description:`<p>At intersections, consider a gap of one to two seconds before accelerating.</p> 
                            <p>Scan left and right to identify any vehicles approaching at speed.</p>
                            <p>This prevents collisions with persons travelling through red lights.
                            </p>`
                        },{
                            id:4,
                            title:"Theft",
                            imageUrl: "theft.jpg",
                            about:"Stationary vehicles present targets of opportunity for vehicle theft or ‘car jacking.",
                            description:`<p>When stationary, do not wind down the window the full way. Leave the window halfway up or more. This creates a barrier between yourself and would be car thieves.</p>
                            <p>Unbuckle your seatbelt when stationary, so you can exit at any point if you need.</p>
                            <p>Ensure you have door automatic lock enabled. Modern vehicles lock above a certain speed. To reduce the automatic locking point, access your vehicle menu.
                            </p>`
                        },{
                            id:5,
                            title:"Security",
                            imageUrl: "security2.jpg",
                            about:"Door automatic locking helps prevent theft of the vehicle.",
                            description:`<p>If not done so already, ensure your vehicle doors automatically lock when you start driving.</p>
                            <p>This prevents offenders opening your vehicle door when stationary, stealing property or the vehicle itself (carjacking).</p>
                            <p>If this feature has not already been activated, refer to the vehicle operating manual or search in the vehicle on-board computer menu. Manufacturers generally set them to lock between 6 – 12mph (10 – 20km/h). This setting can be lowered or increased.
                            </p>`
                        },{
                            id:6,
                            title:"Driving and stopped",
                            imageUrl: "driving.jpg",
                            about:"Some simple tips that will assist in reducing the risk of collision.",
                            description:`<p>When driving, allow a two second gap between your vehicle and the one in front.</p>
                            <p>In traffic, stop your vehicle at distance where the vehicle tires in front, align with your vehicle bonnet.</p>
                            <p>This allows you sufficient distance if you need to quickly move into an adjacent lane or turn.
                            </p>`
                        },{
                            id:7,
                            title:"Licence plates",
                            imageUrl: "plates.jpg",
                            about:"Theft of vehicle number plates is used by criminals to conceal their actions i.e. avoid highway tolls, petrol theft.",
                            description:`<p>If you are operating in a high crime or socially challenged locations, secure the vehicle in a locked garage./<p>
                            <p>
                            Consider fitting special screws that prevent removal of the number / licence plates. If a work vehicle, speak to your vehicle fleet manager or vehicle owner. Note. A special tool is required to remove any number plates, so know its location.
                             </p>`
                        },{
                            id:8,
                            title:"Cold weather",
                            imageUrl: "plates.jpg",
                            about:"Ensure that you prepare a vehicle before winter, with winter tyres and equipment.",
                            description:`<p>Having the right equipment can prevent accidents or reduce the impacts when life doesn’t go to plan.</p>
                            <p class="mb-1">Tips:</p>
                            <ul class="ul_custom_1">
                            <li>Fit winter tyres</li>
                            <li>Replace wiper blades</li>
                            <li>Pack an ice scraper for the windscreen and windows. Even if you usually park in a garage, have one in the car.</li>
                            <li>Pack a snow shovel</li>
                            <li>Sand/salt</li>
                            <li>Add winter liquids to windscreen washer bottles and coolants </li>
                            <li>LED Roadside Flares</li>
                            <li>Check battery and al fluids</li></ul>`
                        }
                    ]
                }
                
        ]
            },{
                    name:"Response",
                    "Category": [
                        {
                            "name":"Violence / harassment",
                            "keyName":"ViolenceHarassment",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Workplace violence",
                                    imageUrl: "workplace_violence2.jpg",
                                    about:"A workplace is a place where work is carried out for a business or undertaking, and includes any place where a worker goes, or is likely to be, while at work. <br />  Unplanned violent events are often dynamic and occur in a short space of time.",
                                    description:`<p>Maintain eye contact with the individual(s).</p>
                                    <p>Maintain situational awareness as to the location of where people are standing and their proximity to items, which may be used to prevent your exit or cause bodily harm.</p>
                                    <p>Use a neutral body posture, keeping your hands in front of you. Around the waist area is ideal.</p>
                                    <p>Identify an exit and make your way towards it.</p>
                                    <p>Maintain awareness of your surrounds until you reach a location you feel safe, a vehicle or location in a building.</p>
                                    <p>Take a moment to assess what occurred.</p>
                                    <p>If you are in immediate danger or a crime has currently occurred, contact emergency services.</p>
                                    <p>Administer first aid if required.</p>
                                    <p>Write notes if needed, as to what occurred and where people were standing. Draw a map if that assists.</p>
                                    <p>If at work, consider contacting a manager in your organisation who you can discuss the matter with and report it. You may have an organisational duty to report a matter, depending on the type of event.
                                     </p>`
                                },{
                                    id:2,
                                    title:"Sexual harassment",
                                    imageUrl: "sexual_harassment2.jpg",
                                    about:"Sexual harassment is an unwelcome sexual advance. an unwelcome request for sexual favours, other unwelcome conduct of a sexual nature in relation to another person. <br />  This scope includes persons in your workplace and while undertaking work activities off site. <br />  If at work, speak to your Human Resources staff and/or outside specialists to identify the definition of sexual harassments versus sexual assault in your country.  ",
                                    description:`<p>If you reasonably suspect that an harassment incident has occurred: </p>
                                    <ul class="ul_custom_1">
                                    <li> Check your person and assess your welfare.</li>
                                    <li>Exit the location to gain time and space.</li>
                                    <li>Record the incident in as much detail, where, with whom, witnesses. Use a piece of paper, cell phone or computer.</li>
                                    <li>If at work, consider reporting the matter to Human Resources and/or a line manager. Review organisational policies and local legislation that may apply.</li>
                                    <li>Contact emergency services if required.
                                    </li>
                                    </ul>
                                    <p>If a sexual assault has taken place, consider all the above and reporting the matter to police. Once notification is made to police, police in general will followed defined policies and procedures. 
                                    </p>
                                    `
                                }
                            ]
                        },
                        {
                            "name":"Crime",
                            "keyName":"Crime",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Theft",
                                    imageUrl: "theft2.jpg",
                                    about:"A theft occurs if a person dishonestly takes somebody else's property, with the intention of permanently depriving the owner",
                                    description:`<p>1. Not at work: </p>
                                    <ul class="ul_custom_1">
                                        <li>Assess what has been stolen.</li>
                                        <li>Avoid touching the area around the stolen item.</li>
                                        <li>Consider reporting the matter to police.</li>
                                        <li>If electronically trackable, share this information with police.</li>
                                        <li>If applicable, report to your insurer with as much detail as possible. Insurers will generally require a police report to assist validate the claim.</li>
                                    </ul>
                                    <p>If a matter is reported to police, ensure you have:</p>
                                    <ul class="ul_custom_1">
                                        <li>A description of the property</li> 
                                        <li>Any serial numbers</li>
                                        <li>Any photographs of the property if it is unique</li>
                                        <li>Proof of ownership</li>
                                        <li>Best contact numbers in the event it is located</li>
                                        </ul>
                                       <p> 2. At work</p>
                                       <p>If it is identified that property has been stolen:</p>
                                       <ul class="ul_custom_1">
                                       <li> Contact those persons in the organisation that may have an interest in the property. It may have been moved.</li>
                                       <li>Broadcast to those in the immediate area if they know anything about the missing property.</li>
                                       <li>Consider points of corroboration, accessing CCTV, building access logs, tracking features.</li>
                                       </ul>

                                    `
                                },{
                                    id:2,
                                    title:"Break in/Burglary",
                                    imageUrl: "burglary.jpg",
                                    about:"A break in is entering, or remaining in a building as a trespasser, with the intent of committing an offence, generally this is theft. The definition may change in your country of origin, but in general, a break in theft from a building. <br />A break in is considered aggravated when a person is at home, while a break in occurs, as the risk of harms and  conflict is increases. ",
                                    description:`<p class="mb-1">If you identify a break in has occurred: </p>
                                    <ul class="ul_custom_1">
                                    <li>Develop a planned response</li>
                                    <li>Identify whether the offender is still in the building. If so, exit to a safe location and contact emergency services, police.</li>
                                    <li>Position yourself so you have good lines of sight and can see any person approaching.</li>
                                    <li>If at night use a torch, carrying it in one hand, at head height, so you can maximise your viewing distance.</li>
                                    <li>If at work, tell security or a person in authority what has happened and where you are.</li>
                                    <li>Identify the point of entry. This could include a broken window, marks on door that has been forced open.</li>
                                    <li>Do not closely approach damaged sections of a building, such as broken glass. Falling debris may cut you.</li>
                                    <li>Avoid touching anything. Police may want to assess the crime scene.</li>
                                    <li>Context dependent, create a form up point outside a building, where people can park their vehicles and respond to the event. This avoids contaminating the crime scene and minimises the risk of injury.</li>
                                </ul>
   
   `
                                },{
                                    id:3,
                                    title:"Robbery",
                                    imageUrl: "robbery.jpg",
                                    about:"A robbery occurs when a person uses violence or the threat of violence to take another person’s property. <br />  An armed robbery has occurred if an offender uses a firearm, imitation firearm, offensive weapon, explosive or imitation explosive.",
                                    description:`<p>If there was physical contact during the robbery, check whether you have any injuries.</p>
                                    <p>If injured, conduct a pat down, running your hands over the area of the suspected injury area.</p>
                                    <p>If injured call emergency services at the earliest opportunity.</p>
                                    <p>If you are not injured, take an assessment as to your location and what was stolen.</p>
                                    <p>Consider whether you report the matter to police. In general, it is your decision as to whether it is reported. This however may be dependent on the laws in your jurisdiction.</p></p>
                                    <p>If you are in immediate danger or a crime is currently occurring, contact emergency services. If there is no immediate danger you may be able to report the matter at a later time at a police station.</p>
                                    <p><strong>Post event</strong></p>
                                    <p>If items were stolen that are owned by your employer, contact the respective asset owners. </p>
                                    <p>If a cell phone, laptop or similar have been stolen, contact your IT department and they may be able to track the location of the assets. This may assist in the asset recovery. It is highly recommended that you do not attend the suspected locations. Provide the information to police and let them make investigations. 
                                    </p>`
                                },{
                                    id:4,
                                    title:"Bomb threats",
                                    imageUrl: "bomb_threats.jpg",
                                    about:"A bomb threat is a threat to detonate an explosive or incendiary device to cause property damage, death, or injuries.<br /> This information is intended for when at work. ",
                                    description:`<p>Treat threats as genuine. Bomb threats can be received through one or more channels:
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li>phone</li>
                                    <li>letter</li>
                                    <li>electronic</li>
                                    </ul>
                                    <p class="mb-1"><strong>Phone – at work</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Stay calm and listen carefully</li>
                                    <li>Keep the caller on the line for as long as possible </li>
                                    <li>Take notes on exactly what the caller tells you</li>
                                    <li>Take notes on the caller’s tone, language anything usual to remember them by</li>
                                    <li>Record any phone numbers on the caller ID</li>
                                    <li>If practical, keep the caller talking and alert a colleague to dial emergency services</li>
                                    <li>Do not hang up the phone if a landline, place it on MUTE</li>
                                    <li>Make notes of any background noises</li>
                                    <li>Notify a line manager at the earliest opportunity</li>
                                    <li>Your organisation will contact emergencies services, detailing x5W (Who, What, When, Why, Where) and x1H (How)</li>
                                    </ul>
                                    <p>DO NOT evacuate immediately. Await instructions from police.</p>
                                    <p class="mb-1"><strong>Letter at work</strong></p>
                                    If you receive a bomb threat by post, switch your cell phone to ‘Airplane mode.’ This reduces the risk of the cell phone acting as a trigger.
                                    <ul class="ul_custom_1">
                                    <li>Avoid further handling a letter or parcel</li>
                                    <li>Take a photograph of the letter</li>
                                    <li>Take photographs of the envelope or parcel without touching it.</li>
                                    <li>Contact a line manager who will initiate an evacuation</li>
                                    <li>Cordon off the area to prevent accidental handling of the letter or parcel. </li>
                                    <li>Your organisation will contact emergencies services, detailing x5W (Who, What, When, Why, Where) and x1H (How)</li>
                                    <li>Supply to authorities any photographs of the letter or parcel.</li>
                                    </ul>
                                    <p>DO NOT evacuate immediately. Await instructions from police.</p>
                                    <p class="mb-1"><strong>Electronic at work</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>If a threat is received electronically, note how it was received i.e. email.</li>
                                    <li>Alert your line manager and IT department.</li>
                                    <li>Your organisation will contact emergencies services, detailing x5W (Who, What, When, Why, Where) and x1H (How)</li>
                                    </ul>


    
                                    `
                                },{
                                    id:5,
                                    title:"Unattended items",
                                    imageUrl: "unattended_items.jpg",
                                    about:"Every object has an owner. In most cases, unattended items or items left in conspicuous areas have simply been forgotten or discarded.<br />  This information is intended for when at work. <br /> If an item appears suspicious, there are risk treated options to consider.    .",
                                    description:`<p>Consider the following actions.
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li>Talk to people in the vicinity to identify the owner</li>
                                    <li>Review any identification tags or addresses</li>
                                    <li>Review CCTV footage to identify owner</li>
                                    </ul>
                                    <p class="mb-1">Use the HOT principal to assess:</p>
                                    <p class="mb-1">Hidden, </p>
                                    <p class="mb-1">Obviously suspicious or</p>
                                    <p class="mb-1">not Typical to its environment</p>
                                    <p class="mb-1"><strong>(H) Hidden</strong></p>
                                    <p> An unattended item that is intentionally hidden merits additional caution.</p>                              
                                    <p class="mb-1"><strong>(O) Obviously suspicious</strong></p>
                                    <p>An item with the characteristics of a bomb or hazardous material merits additional caution. Such characteristics may include:</p>
                                    <ul class="ul_custom_1">
                                    <li>Suspicious labelling</li>
                                    <li>Leakage of fuel oil</li>
                                    <li>Unusual smells, bulges or protruding wires</li>
                                    <li>Power source, such as batteries</li>
                                    <li>LED lights</li>
                                    <li>Pieces of metal or glass (shrapnel)</li>
                                    </ul>
                                    <p class="mb-1"><strong>(T) Not typical</strong></p>
                                        <p>An item that would not typically be discarded or forgotten in that area merits additional caution.</p>
                                        <p class="mb-1"><strong>Next step response</strong></p>
                                        <p>If based on the circumstances and common sense, consider escalating the matter.</p>
                                        <ul class="ul_custom_1">
                                        <li>Do not touch, tilt or tamper</li>
                                        <li>Do not use cell phones, radios or flash photography within a 25 metre radius </li>
                                        <li>Inform a line manager</li>
                                        <li>Cordon off the area and move people away</li>
                                        <li>Record all relevant information (physical characteristics, shape, dimensions, construction and the exact position of the item or vehicle)</li>
                                        <li>Advise security</li>
                                        <li>Call police and follow their instructions.</li>
                                        </ul>
                                        <p class="mb-1">With management and police advice, consider location:</p>
                                        <ul class="ul_custom_1">
                                        <li>Partial evacuation, if the suspicious item is small and thought to be confined to one location</li>
                                        <li>Total evacuation</li>
                                        </ul>


                                    `
                                },{
                                    id:6,
                                    title:"Suspicious packages",
                                    imageUrl: "suspicious_packages.jpg",
                                    about:"If you receive or find a suspicious package, do not touch it. <br /> This information is intended for when at work.",
                                    description:`<p>Indications of a suspicious package:</p>
                                    <ul class="ul_custom_1">
                                    <li>Rigid or bulky</li>
                                    <li>Lopsided or uneven</li>
                                    <li>Poorly written or misspelled labels</li>
                                    <li>Generic or incorrect titles</li>
                                    <li>Excessive postage</li>
                                    <li>No postage</li>
                                    <li>Leaks, stains, powders, or protruding materials</li>
                                    </ul>
                                    <p>If in doubt, treat as a suspicious package.</p>
                                    <p>Options</p>
                                    Leave the mail piece or substance where it was found. 
                                    <ul class="ul_custom_1">
                                    <li>Do not disturb. </li>
                                    <li>Do not try to clean up the substance.</li>
                                    <li>Clear the immediate area of all persons and keep others away.</li>
                                    <li>Notify a line manager</li>
                                    <li>Contact emergency services</li>
                                    <li>Instruct people in the immediate area to wash hands and other exposed skin with soap and water.</li>
                                    <li>Direct these people to a designated area away from the substance to await further instruction.</li>
                                    <li>List the names of the persons in the immediate area of the mail piece or substance.</li>
                                    <li>Cordon off the immediate area.</li>
                                    <li>Shut down all equipment in the immediate area and HVAC systems (heating, ventilation, and air conditioning).
                                    </li>
                                    </ul>

                                    `
                                },{
                                    id:7,
                                    title:"Suspicious persons",
                                    imageUrl: "suspicious_persons.jpg",
                                    about:"Identifying suspicious activity is not an exact science. Identifying suspicious behaviour is a matter of context. <br />                                    Make an informed assessment of suspicious activity or behaviour based on the environment, experience, judgment, and common sense. <br />  This information is intended for when at work                ",
                                    description:`<p>There are behavioural clues staff can look out for when identifying potential preparatory actions for criminal or terrorist activity.</p>
                                    <p class="mb-1">Consider these behavioural signals:</p>
                                    <ul class="ul_custom_1">
                                    <li>Continuous scanning of an area</li>
                                    <li>Unusual perspiration</li>
                                    <li>Heavy breathing</li>
                                    <li>Fidgeting</li>
                                    <li>Rubbing hands</li>
                                    <li>Pacing</li>
                                    <li>Clock watching</li>
                                    <li>Exaggerated yawning; and</li>
                                    <li>Avoiding security/uniformed officers.</li>
                                    </ul>
                                    <p class="mb-1">Suspicious actions:</p>
                                    <ul class="ul_custom_1">
                                    <li>Persons wearing clothing that does not suit the environment or culture </li>
                                    <li>People in stationary vehicles watching a building or structure</li>
                                    <li>Vehicles parked in suspicious circumstances i.e. a small car in a delivery area</li>
                                    <li>People using recording equipment, including camera phones, or seen making notes or sketches of security details</li>
                                    <li>Persons paying close attention to specific entry and exit points, stairwells, hallways or fire escapes</li>
                                    <li>People loitering at or near premises for long periods and watching staff, visitors and deliveries for no apparent reason</li>
                                    <li>People asking detailed or unusual questions about buildings and business operations for no apparent reason</li>
                                    <li>Anyone in ‘off limits’ areas, plant rooms and similar – ask these people who they are and what they are doing</li>
                                    </ul>
                                    <p class="third_title mb-1">Consider</p>
                                    <p class="mb-1"><strong>Recording</strong></p>
                                    <p>Vehicles: Record vehicle number / licence plate, colour, make/model</p>
                                    <p>People: Ethnicity, height, hair colour, length, build, scars/marks/tattoos, clothing top and bottom</p>
                                    <p>Photograph if safe to do so.</p>
                                    <p class="mb-1"><strong> Reporting</strong></p>
                                    <p>Report the matter to a manager or organisational security.</p>
                                    <p class="mb-1"><strong>Approaching</strong></p>
                                    <p>Create a planned response. If safe to do so, consider approaching the person / vehicle if within your organisation’s property with at least one other person. Remember, the person may be doing nothing untoward and may be innocent, so consider your approach and tone.</p>
                                    <p class="mb-1"><strong>Alerting authorities</strong></p>
                                    <p>If circumstances indicate or there is a credible threat, regardless of whether it is inside or outside your organisation’s perimeter of operations, consider reporting the matter to police.</p>`
                                }
                            ]
                        },
                        {
                            "name":"Vehicle",
                            "keyName":"Vehicle",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Tampered vehicle",
                                    imageUrl: "tampered_vehicle.jpg",
                                    about:"Criminals often tamper with a vehicle to distract you or prevent you leaving a location.",
                                    description:`<p>If there are flyers or an obvious modification to your car i.e. flat tire, windscreen wipers up, keep moving and assess the area.</p>
                                    <p>These are common tactics for criminals to distract a target, giving them time to approach and engage. </p>
                                    <p>Walk away from the vehicle and observe if possible for a period, to assess threats and suspicious persons in the area.
                                    </p>
                                    
                                    `
                                },{
                                    id:2,
                                    title:"Collision / accident",
                                    imageUrl: "collision_accident.jpg",
                                    about:"Drive on the road long enough and it is likely you will experience, or be party to a vehicle collision.",
                                    description:`<p class="mb-1"><strong>Initial response</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Stop and turn off your vehicle/li>
                                    <li>Apply the handbrake /li>
                                    <li>Switch on your hazard lights. /li>
                                    <li>Check yourself and others for injury. Run your hand along your body at pain points/li>
                                    <li>If pain is felt in your neck or back, consider remaining in the vehicle, if safe to do so./li>
                                    <li>Contact emergency services</li>
                                    <li>Emergency services will ask for injured parties gender, approximate age, whether the person is conscious and/or bleeding, any special circumstances.</li>
                                    </ul>                                    
                                    <p><strong>Outside the vehicle</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Exit the vehicle if it is safe to do so.</li>
                                    <li>Re-check yourself for injury</li>
                                    <li>If serious injury, emergency services will assist by phone until on scene. If minor, consider self-treating using the first aid kit to triage any injuries</li>
                                    <li>Put on a high visibility vest. In many European countries it is a legal requirement.</li>
                                    <li>Set up emergency triangles 50m – 100m+ towards oncoming traffic, so vehicles can slow down</li>
                                    <li>Check on any other parties involved in the incident to identify whether they require medical assistance</li>
                                    <li>Do not admit fault</li>
                                    <li>Select the Help button in Aegis 24/7 and alert select Contacts of your live location</li>
                                    </ul>                                    
                                    <p><strong></strong>Obligations</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>In Australia, drivers involved in a collision must stop and supply their name and address. In some European countries drivers must wait until police arrive.</li>
                                    <li>Ask the driver(s) of any other vehicles for their phone number and insurance provider</li>
                                    <li>Generally drivers will exchange or allow the other person to view their driver’s licence, to ensure they have one and that the details are correct. There is no legal obligation however for a driver to do this.</li>
                                    <li>Where the driver is not the vehicle's owner, they must provide the owner's name and address. If they refuse, contact the police.</li>
                                    <li>Some jurisdictions require drivers involved in vehicle collisions, that involve bodily injury or property damage over a defined threshold, to report the collision to police. Contact your local police station on your obligations.</li>
                                    <li>If police attend, you may be required to provide a breath alcohol sample. If you are unable to do so due or are unable due to injuries, you may be requested to attend a hospital for the purpose of a blood test, to identify whether alcohol was a factor. This process may be followed for all driver’s involved in a collision, regardless of fault.</li>
                                    </ul>
                                    <p><strong>Additional information</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>In addition to a full name and address, you should also collect other contact details, including phone numbers, email addresses, and driver’s license numbers of all parties involved in the incident</li>
                                    <li>Record the registration number, make and model of all vehicles involved, and the driver’s insurance companies</li>
                                    <li>Record the time, date, and precise street location of the crash, direction of travel</li>
                                    <li>Take photographs of the scene and vehicle damage, if it is safe to do so</li>
                                    <li>Record the weather conditions, any obstructions, road signage in the area</li>
                                    </ul>
                                    <p><strong>Vehicle unsafe to drive</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Organise a tow truck through your insurer, ask police or arrange yourself</li>
                                    <li>Ask for a booking number or registration number of the tow truck that is to arrive</li>
                                    <li>Check the business name and details of the tow truck that arrives, against those that were booked. </li>
                                    </ul>
                                    <p><strong>Transport from the scene</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>If no medical treatment is required away from the collision site, ask a known person to collect you, or be available for you, when you arrive at your destination/li
                                    <li>After a collision, avoid driving if circumstances permit, as you may not be thinking clearly or may be feeling fatigued or unwell. This is as a result of the body’s natural adrenaline, which may have activated during the collision./li
                                    </ul>
                                    <p><strong>After a collision</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Collisions can affect people in different ways. If you are feeling medically unwell, consider obtaining medical treatment.</li>
                                    <li>Avoid consuming alcohol </li>
                                    <li>After a stressful event, you may experience: symptoms that include:</li>
                                    </li>
                                    </ul>
                                    <ul class=" ms-5 ul_custom_1">
                                    <li>Disbelief and shock</li>
                                    <li>Tension and irritability</li>
                                    <li>Fear and anxiety</li>
                                    <li>Headaches</li>
                                    <li>Trouble concentrating</li>
                                    </ul>
                                    <p>If the incident occurred with a work vehicle or during work activities, consider contacting your organisations Human Resources,  Employee Assistance Program or consider self-care for your well-being including:</p>
                                    <ul class="ul_custom_1">
                                    <li>Avoid drugs, alcohol and excessive use of tobacco. </li>
                                    <li>Find support. Seek help from a partner, family member, friend, counsellor, doctor, or clergyperson. Having someone with a sympathetic, listening ear and sharing about your problems and stress really can lighten the burden.</li>
                                    <li>Connect socially. After a stressful event, it is easy isolate yourself. Make sure that you are spending time with loved ones. Consider planning fun activities with your partner, children, or friends.</li>
                                    <li>Take care of yourself through:</li>
                                    </ul>
                                    <ul class=" ms-5 ul_custom_1">
                                    <li>a healthy, well-balanced diet</li>
                                    <li>exercise regularly</li>
                                    <li>get plenty of sleep</li>
                                    <li>maintain a normal routine</li>
                                    <li>stay active</li>
                                    </ul>
                                    <p>Recognise when you need more help. If problems continue talk to a psychologist, social worker, or professional counsellor.
                                    </p>`
                                }
                                ,{
                                    id:3,
                                    title:"Stuck – snow/mud",
                                    imageUrl: "stuck_snow_mud.jpg",
                                    about:"If a vehicle is unable to move forward and the wheels are spinning, traction is needed for the tires to grip.",
                                    description:`<p>Identify whether the vehicle is front or rear wheel drive. 
                                    <p>Place items at the front of the tire, so as it turns, it grips the items. 
                                    <p class="mb-1">Items that can be used include:</p>
                                    <ul class="ul_custom_1">
                                    <li>sand / gravel</li>
                                    <li>branches and leaves from trees</li>
                                    <li>sticks or small wooden items. Check there are no sharp points that will puncture the tire</li>
                                    <li>vehicle floor mats</li>
                                    <li>newspaper</li>
                                    <li>worst case, let some air out of your tires, so it gives the tire more surface area</li>
                                    </ul>
                                    <p>Clear the area around the exhaust if needed i.e. build up of snow or mud.</p>
                                    <pAccelerate slowly. Don’t spin the wheels.</p>`
                                }
                                ,{
                                    id:4,
                                    title:"Break down",
                                    imageUrl: "break_down2.jpg",
                                    about:"If your vehicle becomes inoperable, pull to the side of the road into a service lane or to a point furthest point away from traffic.",
                                    description:`<p>Turn on the vehicle hazard lights.</p>
                                    <p>If safe to do so, exit the vehicle and stand off the roadway. If you have one, put on your high visibility vest and deploy breakdown triangle signage. In some European countries it is mandatory. </p>
                                    <p>Ideally when standing off a roadway, stand some distance back from the vehicle and towards oncoming traffic. This prevents injury if passing motorists, looking at your vehicle steer towards it and collide with it.</p>
                                    <p>If it is unsafe to exit the vehicle, such as in a freeway environment with no emergency lane, stay inside the vehicle with the seat belt on. Call roadside assist or towing at the earliest opportunity.
                                     </p>`
                                }
                            ]
                        },
                        {
                            "name":"Fire",
                            "keyName":"Firer",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"On foot",
                                    imageUrl: "on_foot2.jpg",
                                    about:"If circumstances force people into the open, seek shelter as soon as possible.<br />Radiant heat from the fire may cause injury or death.",
                                    description:`<p>Head for a solid building or gain access to a vehicle as soon as possible.</p>
                                    <p>Activate Help in Aegis 24/7 so your live location is known to select contacts.</p>
                                    <p>Avoid sloped terrain. A fire will burn faster uphill because the flames can preheat unburnt fuel in front of the fire, causing the fuel to burn more efficiently. The fire speed will double for every 10 degrees of angle lift.</p>
                                    <p>Monitor emergency broadcasts. Telecommunications for cell phones may break down as infrastructure is destroyed.</p>
                                    <p>Leave early before roads become blocked.</p>
                                    <p>Advise and update contacts of your plans and progress.</p>
                                    <p class="mb-1"><strong>Fire blocks your escape</strong></p>
                                    <p>Shelter as best as possible using large, solid objects between you and the fire.</p>
                                    <p>Protect yourself from the radiant heat by lying beside a large tree log, against a riverbank or even a solid stone fence as the fire front passes.
 </p>`
                                },{
                                    id:2,
                                    title:"Preparing to leave",
                                    imageUrl: "leave.jpg",
                                    about:"If you need to leave a building due to progress of a fire, prepare the vehicle.",
                                    description:`<p>Identify the trigger to leave i.e. the declaration of Total Fire Bans or the forecast high-risk bushfire weather for your area.</p>
                                    <p>Prepare your vehicle with your emergency ‘go’ bag, first aid, fuel and protective equipment.</p>
                                    <p>Ensure you have as much water as you can carry.</p>
                                    <p>Pack fire extinguishers obtained from buildings that are not required, or are of more value with people in vehicles.</p>
                                    <p>Pack fire or woollen blankets, which can be used to shield you from heat sources you may encounter.</p>
                                    <p>Use N95/FFP2 face masks to slow the effects of smoke inhalation.
                                     </p>`
                                }
                                ,{
                                    id:3,
                                    title:"Vehicle travel",
                                    imageUrl: "vehicle_travel3.jpg",
                                    about:"If you need to leave in a vehicle to escape a fire, leave early and consider the options when driving in / near a fire area.",
                                    description:`<p>Leave early before roads become blocked.</p>
                                    <p>Do not assume because you can see the head of the fire, that it is the only point of the fire near you. Embers such as leaves, bark, sticks which are alight, carry ahead of the fire and may create spot fires around your location or surround your location. Leave at the earliest opportunity.</p>
                                    <p>Advise and update contacts of your plans and progress.</p>
                                    <p>Close air conditioning vents to prevent smoke and embers entering the vehicle</p>
                                    <p class="mb-1"><strong>Fire blocks your escape</strong></p>
                                    <p>Find an open area with limited amounts of grass or fuel in it.</p>
                                    <p>Park your car facing towards the fire, close windows and air vents, leave the headlights on and turn the engine off.</p>
                                    <p>Get as low as you can below the level of your windows and cover yourself with any cotton or wool fabric you may have.
                                    </p>`
                                },                                ,{
                                    id:4,
                                    title:"Building fire",
                                    imageUrl: "building_fire.jpg",
                                    about:"Fire alarms may or may not activate. If you observe fire or smoke, alert others. <br />   In the event of a fire, look for emergency exit signs .",
                                    description:`<p>Assess whether the fire can be contained with fire extinguishers and hoses, which are part of building fire equipment.</p>
                                    <p>Alert contacts and management. They will contact emergency services while you take action either fighting the fire or evacuating the building, depending on circumstances.</p>
                                    <p>If you fight a fire, aim fire equipment contents at the base of the fire.</p>
                                    <p>If the fire cannot be contained, evacuate.</p>
                                    <p>Leave personal possession and equipment behind. If in a foreign location, take your passport if you can. People before property.</p>
                                    <p>Locate the fire escape routes. These will be indicated by signage from the ceiling.</p>
                                    <p>Locate evacuation plans, near door entrance/exits. These will show direction of travel and where to assemble.</p>
                                    <p>If required used stairs, do not use the lifts.</p>
                                    <p>Contact a manager once you are in a safer location or at the assembly point. A head count should be conducted.
                                    </p>`
                                }
                            ]
                        },
                        {
                            "name":"Wind",
                            "keyName":"Windr",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Personal safety",
                                    imageUrl: "personal_safety3.jpg",
                                    about:"During severe wind events, look out for your personal safety.",
                                    description:`<p>Advise your contacts of your location and update them on your status at regular intervals.</p>
                                    <p>Avoid going near windows.</p>
                                    <p>Avoid going outside.</p>
                                    <p>Wear clothing for rain conditions and sturdy footwear
                                    </p>`
                                },{
                                    id:2,
                                    title:"Safe room",
                                    imageUrl: "safe_room3.jpg",
                                    about:"If unable to leave a building, move to the strongest, most secure part of the building.",
                                    description:`<p>Select a part of a building which is in the inner section. Ideal locations include basements or an inside room without windows on the lowest floor.</p> 
                                    <p>Avoid sheltering in a room with windows. If there is no option, use wooden sheeting to board over any exposed windows. Tape any windows in an ‘X’ format, corner to corner, to minimise the risk of flying glass.</p>
                                    <p>For added protection get under something sturdy (a heavy table or workbench). Cover your body with a blanket or similar to protect your person.
                                     </p>`
                                }
                                ,{
                                    id:3,
                                    title:"Downed trees",
                                    imageUrl: "downed_trees3.jpg",
                                    about:"Downed trees present a hazard to movement.",
                                    description:`<p>Stay 24 - 30ftif a (8-10m) away from the tree. They can spring back up.</p>
                                    <p>If in a vehicle, stay in the vehicle.</p>
                                    <p>Do not drive over the tree.</p>
                                    <p>Create a barrier to prevent other people and vehicles entering the hazard area i.e. use your vehicle with the hazard lights on. </p>
                                    <p>If at work, notify facilities management in your organisation.</p>
                                    <p>If unable to contact facilities management in your organisation, notify emergency services</p>
                                    . </p>`
                                }
                            ]
                        },
                        {
                            "name":"Lightening",
                            "keyName":"Lighteningr",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"On foot",
                                    imageUrl: "on_foot4.jpg",
                                    about:"When lightening is present, seek shelter at the earliest opportunity.",
                                    description:`<p>Move inside a substantial building as quickly as possible. Avoid small structures.</p>
                                    <p>As you move to safety, avoid poles, tress, towers, which may attract lightning.</p>
                                    <p>Avoid wide flat open terrain. This is because you will be the tallest item for lightening to make contact with.</p>
                                    <p>If you are unable to make it to a building, head for lower ground such as down the slope  of a valley or gully. Be aware that flash flooding may occur so avoid locations close to streams and rivers
                                     </p>`
                                },{
                                    id:2,
                                    title:"In a building",
                                    imageUrl: "building3.jpg",
                                    about:"Lightening can create health risks even when inside a building.",
                                    description:`<p>Stay away from windows.</p>
                                    <p>Avoid touching or using powered electrical items.
                                     </p>`
                                },{
                                    id:3,
                                    title:"In a vehicle",
                                    imageUrl: "vehicle4.jpg",
                                    about:"Driving during a lightning storm is not recommended.",
                                    description:`<p>If lightning strikes near your vehicle while driving: </p>
                                    <ul class="ul_custom_1">
                                    <li> Pull over</li>
                                    <li>Put the hazards lights on</li>
                                    <li>Turn off the engine.</li>
                                    <li> Shut all windows and avoid touching the windows</li>
                                    </li> The vehicle is grounded, which means that even if lightning strikes, the electrical charge will travel through the vehicle to the ground via the tyres.</li>
                                    </ul>  `
                                }

                            ]
                        },
                        {
                            "name":"Earthquake",
                            "keyName":"Earthquake",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"In a building",
                                    imageUrl: "building6.jpg",
                                    about:"Buildings can fully or partially collapse as a result of environmental events or structural failure.",
                                    description:`<p>Earthquakes can cause fires, tsunamis, landslides or avalanches. Protect your person.</p>
                                    <p class="mb-1"><strong>Drop</strong></p>
                                    <p class="mb-1"><strong>Cover</strong></p>
                                    <p><strong>Hold</strong></p>                                    
                                    <p class="mb-1"><strong>Drop</strong></p>
                                    <p>Wherever you are, drop down to your hands and knees and hold onto something sturdy.</p>
                                    <p class="mb-1"><strong>Cover</strong></p>
                                    <p>Cover your head and neck with your arms. If a sturdy table or desk is nearby, crawl underneath it for shelter. If no shelter is nearby, crawl next to an interior wall (away from windows). Crawl only if you can reach better cover without going through an area with more debris. Stay on your knees or bent over to protect vital organs.</p>
                                    <p class="mb-1"><strong>Hold</strong></p>
                                    <p>If you are under a table or desk, hold on with one hand and be ready to move with it if it moves. If seated and unable to drop to the floor, bend forward, cover your head with your arms and hold on to your neck with both hands.</p>
                                    <p class="mb-1"><strong>After the initial earthquake</strong></p>
                                    <p>If you need help, contact emergency services. </p>
                                    <p>Activate Help in Aegis 24/7, so your live location is known to select Contacts.</p>
                                    <p>Stay far away from mirrors, door glasses and heavy objects on safes that can harm you.</p>
                                    <p>Do not use the lift. The stairs are safer.</p>
                                    <p>Attempt to extinguish fires that may occur post event.</p>
                                    <p>If you are in a damaged building, go outside and quickly move away from the building. Do not enter damaged buildings.</p>
                                    <p>If you are outdoors, move away from any buildings or structures where items could fall on you.</p>
                                    </p>`
                                },{
                                    id:2,
                                    title:"On foot",
                                    imageUrl: "foot7.jpg",
                                    about:"If you are outside during or after an earthquake, move to a location that will reduce the risk of harm from falling objects.",
                                    description:`<p>Move to a clear area. </p>
                                    <p>Avoid standing in the vicinity or buildings, power lines, trees. This is to avoid objects falling on you.</p>
                                    <p>If you are in a location that may experience tsunamis, go inland or to higher ground immediately after the shaking stops.
                                    </p>`
                                },{
                                    id:3,
                                    title:"In a vehicle",
                                    imageUrl: "foot8.jpg",
                                    about:"If an earthquake occurs whilst driving, find and park in an area free of structures.",
                                    description:`<p>Pull over to the side of the road.</p>
                                    <p>Do not park under structures or at location where items could fall onto the vehicle.</p>
                                    <p>Activate your hazard lights.</p>
                                    <p>Let contacts know where you are and what happened.</p>
                                    <p>If you are able to, access your ‘go-bag’ which contains basic items to assist in survival.
                                    </p>`
                                }

                            ]
                        },
                        {
                            "name":"Downed power lines",
                            "keyName":"DownedPowerLines",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"On foot",
                                    imageUrl: "on_foot5.jpg",
                                    about:"Power lines down can create a significant hazard. Do not approach downed power lines",
                                    description:`<p>Assume the power line is still live.</p>
                                    <p>Stay 8-10 metres (24-30ft) away. Be aware that the line may be touching vehicles, metal fences or pools of water.</p>
                                    <p>Do not drive over the power line.</p>
                                    <p>If in a vehicle, stay in the vehicle.</p>
                                    <p>Create a barrier to prevent other people and vehicles entering the hazard area i.e. use your vehicle with the hazard lights on. </p>
                                    <p>Notify facilities management in your organisation.</p>
                                    <p>If unable to contact facilities management in your organisation, notify emergency services, who will contact a utility provider.
                                     </p>`
                                },{
                                    id:2,
                                    title:"In a vehicle",
                                    imageUrl: "vehicle13.jpg",
                                    about:"If your vehicle has downed power lines across it, stay in the vehicle.",
                                    description:`<p>Sometimes, powerlines are downed in car accidents. The powerlines may drape over the vehicle. The tires act as insulation, so urge anyone inside the car to stay there where they will be safe from electric shock. </p>
                                    <p>Contact emergency services.</p>
                                    <p>If you are inside the vehicle, activate Help in Aegis 24/7, so your live location is known to select Contacts.</p>
                                    <p>If outside the vehicle, do not approach the scene until it has been declared safe by the proper authorities. </p>
                                    <p>Stand well back and try to encourage any bystanders to keep a distance of at least 20ft (six metres).
                                     </p>`
                                }
                            ]
                        },
                        {
                            "name":"Public emergency",
                            "keyName":"PublicEmergencyr",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Active shooter / terrorism",
                                    imageUrl: "shooter_terrorism.jpg",
                                    about:"Active shooter or terrorist situations are unpredictable and evolve quickly. How you react can save your life and that of others.<br />An active shooter is an individual engaged in attempting to kill people in a confined space or populated area. Active shooters typically use firearms and have no pattern to their selection of victims<br />Terrorism is one form of politically motivated violence, which comprises a specific set of activities including acts or threats of violence that:<br/> are likely to achieve a political objective<br/>intended to influence the policy of a government<br/>involve the taking of hostages",
                                    description:`<p>It is situation dependent on what action you take. These unplanned events are fluid. The option chosen may need to be changed to suit conditions
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li><strong>RUN</strong></li>
                                    <li><strong>HIDE</strong></li>
                                    <li><strong>FIGHT</strong></li>
                                    <li><strong>TELL</strong></li>
                                    </ul>
                                    <p><strong>RUN</strong> to a place of safety. This is a far better option than to surrender or negotiate. Leave your belongings behind.
                                     If it is unsafe to evacuate an area due to an imminent threat, then consider next steps</p>
                                     <p><strong>HIDE</strong>. It’s better to hide than to confront.</p>
                                     <p>Actions to take when hiding:</p>
                                     <ul class="ul_custom_1">
                                     <li>Remain inside the building or office and protect yourself there. </li>
                                     <li>Close and lock all doors and windows.</li>
                                     <li>Blockade entry points with heavy furniture</li>
                                     <li>Close blinds and curtains.</li>
                                     <li>Turn off lights.</li>
                                     <li>Keep silent.</li>
                                     <li>Turn your cell phone volume to silent and no vibration.</li>
                                     <li>Contact people to let them know exactly where you are and who you are with.</li>
                                     <li>Secure any plant or machinery that may pose a hazard</li>
                                     <li>Use duct tape or a similar to seal all cracks around the door and any vents into the room.</li>
                                     <li>Monitor news channels</li>
                                     </ul>
                                     <p class="mb-1"><strong>FIGHT</strong> when you cannot RUN or HIDE, attempt to disrupt the attack or disable the attacker.</p>
                                     <p>Be aggressive and commit to your actions.</p>
                                     <p>Recruit others to ambush the attacker with makeshift weapons like chairs, fire extinguishers, scissors, books, etc.</p>
                                     <p>Be prepared to cause severe or lethal injury to the attacker.</p>
                                     <p>Wounded. Take care of yourself first and then, if you are able, help the wounded get to safety and provide immediate care. Contact emergency services for guidance.</p>
                                     <p class="mb-1"><strong>TELL</strong> the police what has happened either in person or by phone.</p>
                                     <p>If you cannot speak, leave the line open and allow the dispatcher to listen.</p>
                                     <p>If you can speak, detail your location. Look for and use landmarks or buildings as a reference if unsure.</p>
                                     <p>Detail who you are and any persons with you.</p>
                                     <p>You may be asked to provide the following information on what you see or hear. Only do this if it is safe to do so:</p>
                                     <ul class="ul_custom_1">
                                     <li>Location and number of active shooter(s) or terrorists</li>
                                     <li>Physical description of shooter/s</li>
                                     <li>Number and type of weapons held by the shooter/s</li>
                                     </ul>
                                     <p>Activate Help in Aegis 24/7 so your location is known to your contacts who will be able to view your live location.</p>
                                     <p class="mb-1"><strong>POLICE CONTACT</strong></p>
                                     At some point during a shooter event you will have contact with police:
                                     </p>
                                     <ul class="ul_custom_1">
                                     <li>Show your hands</li>
                                     <li>Avoid sudden movements</li>
                                     <li>Listen to instructions</li>
                                     <li>Report to designated areas to provide information</li>
                                     </ul>

                                     
                                     
                                    `
                                },{
                                    id:2,
                                    title:"Roadways",
                                    imageUrl: "roadways.jpg",
                                    about:"During public emergencies, monitor traffic conditions. Major roads become congested quickly.",
                                    description:`<p>Apply local knowledge and use back roads or use mapping apps to identify congestion points and avoid </p>`
                                }
                            ]
                        },
                        {
                            "name":"Industrial accident",
                            "keyName":"IndustrialAccident",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Industrial accident",
                                    imageUrl: "industrial_accident3.jpg",
                                    about:"If obvious, shut down machinery and plant if safe to do so, to avoid further injury or loss of life.",
                                    description:`<p>Complex machinery often requires a sequenced shutdown. Locate a knowledgeable user.</p>
                                    <p>Assess the situation, obtain the gender, approximate age, whether the person is conscious and/or bleeding, any special circumstances.</p>
                                    <p>Contact emergency services.</p>
                                    <p>Emergency services will ask you about the situation and the condition of the person(s) involved.</p>
                                    <p>Tell a manager what has happened so an organisational response can be created.</p>
                                    <p>Report your involvement to your organisation’s safety officer, if it has not been done so already.
                                    </p>`
                                }
                            ]
                        },
                        {
                            "name":"Electrocution",
                            "keyName":"Electrocution",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Electrocution",
                                    imageUrl: "electrocution.jpg",
                                    about:"Electrocution at work.",
                                    description:`<p>A person is identified as suffering from an electrical shock or unconscious in the vicinity of a power source.</p>
                                    <p>Do not touch the person unless you are sure they are no longer in contact with the electrical source.</p>
                                    <p>Causes of electric shock include:</p>
                                    <ul class="ul_custom_1">
                                     <li>Faulty appliances</li>
                                     <li>Damaged or frayed cords or extension leads</li>
                                     <li>Electrical appliances coming in to contact with water</li>
                                     </ul>
                                     <p>Symptoms of an electric shock include:</p>
                                     <ul class="ul_custom_1">
                                     <li>Unconsciousness</li>
                                     <li>Difficulties in breathing or no breathing at all</li>
                                     <li>A weak, erratic pulse or no pulse at all</li>
                                     <li>Burns, particularly entrance and exit burns (where the electricity entered and left the body)</li>
                                     <li>Sudden onset of cardiac arrest</li>
                                     </ul>
                                     <p class="mb-1"><strong>Assess the risk</strong></p>
                                     <p>If water is present near the electrical shock victim, conduct a walk around assessment to try and identify the source of the water.</p>
                                     <p class="mb-1"><strong>Response</strong></p>
                                     <p>Identify the source of electricity if safe to do so and turn off or disconnect. </p>
                                     <p>Consider that it may be safer to turn off the electricity supply to the building if possible, to be absolutely sure.</p>
                                     <p>If safe to do so, shutoff the water source to prevent further scene risk.</p>
                                     <p class="mb-1"><strong>Scene secured</strong></p>
                                    <ul class="ul_custom_1">
                                      <li>Check the person’s response and breathing.</li></ul> 
                                      <p>If the persons heart has stopped, commence cardiopulmonary resuscitation (CPR) and use a defibrillator if available and required.</p>
                                      <p>For more see the First Aid section.</p>
                                      <p>Call emergency services for an ambulance or ask a by stander to call. If you are unsure of resuscitation techniques, the ambulance call-taker will give you easy-to-follow instructions over the telephone, so you can increase the person’s chances of survival until the ambulance arrives.</p>
                                      <p>If the persons breathing is steady and they are responsive, attend to their injuries. Cool the burns with cool running water for 20 minutes and cover with dressings, if available, that won’t stick. Simple cling wrap found in most kitchens is very suitable to cover burns as long as it is not applied tightly. </p>
                                      <p>Never put ointments or oils onto burns. If the person has fallen from a height, try not to move them unnecessarily in case they have spinal injuries. Only move them if there is a chance of further danger from the environment.</p>

                                    `
                                }
                            ]
                        },
                        {
                            "name":"Health",
                            "keyName":"Healthr",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"COVID19 and beyond",
                                    imageUrl: "beyond3.jpg",
                                    about:"If you are unwell or experiencing COVID-19 like symptoms, take action.",
                                    description:`<p>If you believe you may have contracted a virus that may harm yourself or others, isolate immediately. Refer to your medical authority information in your area.</p>
                                    <p>If you have cold or flu like symptoms, such as a cough, fever, sore throat, shortness of breath or runny nose, even if these are mild, it is recommended that you should get tested.</p>
                                    <p>Seek medical help from a doctor or hospital, call ahead of time to book an appointment.</p>
                                    <p>You will be asked to take precautions when you attend for treatment. Follow the instructions you are given.</p>
                                    <p>Wear a surgical or N95/FFP2 mask to protect others. Stay at least 5ft (1.5m) away from other people. Cover your coughs or sneezes with your elbow.</p>
                                    <p class="mb-1">Tell the doctor about:</p>
                                    <ul class="ul_custom_1">
                                    <li>your symptoms</li>
                                    <li>any travel history</li>
                                    <li>any recent contact you have had with someone who has COVID-19</li>
                                    </ul>
                                    <p>Take a test to determine whether you have contracted a virus.</p>
                                    <p>Follow instructions regarding isolation and treatment.
                                     </p>`
                                },{
                                    id:2,
                                    title:"Mental health",
                                    imageUrl: "mental_health.jpg",
                                    about:"If you are in an emergency, or there is immediate risk of harm to yourself or others, please contact emergency services.",
                                    description:`<p> </p>`
                                }
                            ]
                        },
                        {
                            "name":"Lost",
                            "keyName":"Lost",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"On foot",
                                    imageUrl: "foot20.jpg",
                                    about:"If you do become lost your most important tool is keeping a positive mental attitude.",
                                    description:`<ul class="ul_custom_1">
                                    <li><strong>Stop</strong></li>
                                    <li><strong>Think</strong></li>
                                    <li><strong>Observe</strong></li>
                                    <li><strong>Plan</strong></li>
                                    <li><strong>Tell</strong></li>
                                    </ul>
                                    <p class="mb-1"><strong>Stop</strong></p>
                                    <p>As soon as you realize you may be lost, stop.</p>
                                    <p class="mb-1"><strong>Think</strong></p>
                                    <p>Go over in your mind how you got to where you are. Can you retrace your steps? This could be a way to return to a recognisable place.</p>
                                    <p>What landmarks should you be able to see?</p> 
                                    <p>Do not move at all until you have a specific reason to take a step.</p>
                                    <p class="mb-1"><strong>Observe</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Identify landmarks to gain your location</li>
                                    <li>Use higher ground to assist</li>
                                    </ul>
                                    <p class="mb-1"><strong>Plan</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Based on your planned response, come up with some possible plans, think them through then act on one of them.</li>
                                    <li>If you are not confident in the route chosen, then stay put.</li>
                                    <li>If it is nightfall, you are injured or you are near exhaustion, stay in place.</li>
                                    </ul>
                                    <p class="mb-1"><strong>Tell</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>If you have cell signal, tell contacts what has happened, activate Help in Aegis 24/7 and your location will be actively shared</li>
                                    <li>If you are concerned for your immediate welfare or have an injury, contact emergency services
                                    </li></ul>
                                    <p>On foot in non-metropolitan locations</p>
                                    <ul class="ul_custom_1">
                                    <li>Rest in the shade where possible.</li>
                                    <li>Drink enough water to avoid dehydration.</li>
                                    <li>Stop and fix small problems. If you ignore your body and try to push through pain or ignore illness, it may make things worse and make recovery more difficult.
                                    </li></ul>
                                    <p>You are responsible for your own safety and for the safety of those around you.</p>
                                    <p class="mb-1"><strong>Contacting emergency services</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>If you do not have cell signal, move to higher ground. Deep valleys and mountainous areas often have no cell coverage</li>
                                    <li>Tell the dispatcher how you came to be at your location</li>
                                    <li>Share your location in the Aegis 24/7 app.</li>
                                    </ul>  `
                                },{
                                    id:2,
                                    title:"Lost with a vehicle",
                                    imageUrl: "vehicle20.jpg",
                                    about:"You can become lost due to inaccurate hardcopy maps or no cell phone signal for your online map navigation system.",
                                    description:`<ul class="ul_custom_1">
                                    <li>Stay with your vehicle. A vehicle can be spotted much more easily by search missions from the air.</li>
                                    <li>Move the vehicle into an open space and open the bonnet and doors so it’s easier to see from the air and the ground.</li>
                                    <li>Remove your side mirrors and use them to reflect the sun at distant vehicles or aircraft to catch their attention.</li>
                                    <li>Find or build shade near your vehicle</li>
                                    <li>Engage in minimal physical activity</li>
                                    <li>Stay warm at night. Use blankets, clothing around your person and vegetation to create shelter and insulation between yourself and the ground.</li>
                                    <li>It is not recommended, but if you do move away from a vehicle, look for and follow manmade features such as fences, as farmers conduct regular checks on their fence lines. Walking out on foot would be considered a last course of action.</li>
                                    </ul>
                                    <p>Active Help in Aegis 24/7 to notify your selected Contacts</p>
                                    <p class="mb-1"><strong>Contacting emergency services</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>If you do not have cell signal, move to higher ground. Deep valleys and mountainous areas often have no cell coverage</li>
                                    <li>Tell the dispatcher how you came to be at your location</li>
                                    <li>Cell battery charge</li>
                                    <li>Share your location if possible</li>
                                    <li>In iPhone, access Utilities, Compass. It will display your </li>
                                    </ul>`
                                }
                            ]
                        },
                        {
                            "name":"Media",
                            "keyName":"Media",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Media",
                                    imageUrl: "media.jpg",
                                    about:"Be mindful of what is recorded and stated in front of media or persons with access to recording devices. What you say may create issues at a later date.",
                                    description:`<p>It is recommended not to make comments, place yourself or other persons in photographable compromising situations, which may damage your reputation and if at work, your organisation.
                                    <p>Making comments may result in your involvement in civil or criminal investigations.</p>
                                    <p>If at work, play it safe. Refer all media enquiries back to senior management in your organisation</p>
                                     </p>`
                                }
                            ]
                        },
                        {
                            "name":"Emergency services",
                            "keyName":"EmergencyServices",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Contact",
                                    imageUrl: "contact.jpg",
                                    about:"Emergency services will want to speak with the most knowledgeable person at an event to find out what happened.",
                                    description:`<p>Emergency services will want to know Who, What, When, Why, Where, How.</p>
                                    <p>Be clear about what happened. It assists their decision making and ability to provide assistance.</p>
                                    <p class="mb-1">If the matter is criminal in nature:</p>
                                     <ul class="ul_custom_1">
                                     <li>Clarify the reason that police are speaking to you if it is not clear</li>
                                     <li>Ask police on your obligations and rights when speaking to them</li>
                                     <li>Prior to providing information to police, consider the context and:</li>
                                     </ul>
                                     <ul class="ul_custom_1 ms-5">
                                     <li>Contact senior management in your organisation. </li>
                                     <li>Consider obtaining legal advice. </li>
                                     </ul>
                                     <p>Ask for a business or calling card from police, so you know where they are stationed, should there be follow up enquiries.</p>
                                     <p>Make a note of what happened, what was said in your cell phone or on paper. This may be needed at a later date to refresh your memory as to what happened.</p>
                                     

                                     `
                                }
                            ]
                        },
                        {
                            "name":"Accessing a location",
                            "keyName":"AccessingALocation",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Accessing a location",
                                    imageUrl: "location3.jpg",
                                    about:"Accessing a location when at work.",
                                    description:`<p>Locations are often secured using a number of methods, electronically or manually.</p>
                                    <p>If you require access to a location and are authorised, consider contacting your administration department during business hours and security after hours.</p>
                                    <p>If there is an unplanned event, security or facilities management will have access to electronic or manual keys that will be required for a range of unplanned events at an organisational site.</p>
                                    <p>At remote sites individual managers may have access to site access.
                                     </p>`
                                }
                            ]
                        },
                        {
                            "name":"First aid",
                            "keyName":"FirstAid",
                            "gData":[ 
                                {
                                    id:1,
                                    title:"Emergency dispatcher questions",
                                    imageUrl: "questions.jpg",
                                    about:"When travelling in economically and socially challenged locations, minimise the use of your cell phone in public. It attracts attention and marks you as a person not from the area.",
                                    description:`<p>Stay calm and speak slowly..</p>
                                    <p>Do not hang up until the call taker tells you to.</p>
                                    <p>Questions they may ask include:.</p>
                                    <p class="mb-1"><strong>Reporting person</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Your name, cell number and location.</li>
                                    <li>You will be asked for the address and closest cross (nearest intersecting) street.</li>                                 
                                </ul>
                                <p class="mb-1"><strong>Patient basics</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Approximate age</li>
                                    <li>Are they concious and breathing</li>                                 
                                </ul>
                                <p class="mb-1"><strong>Detailed assessment</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Details of the situation , what has happened, including any scene safety concerns</li>
                                    <li>How many people need medical assistance</li>                           
                                    <li>Condition of patient(s)</li>      
                                </ul>
                                 <p class="mb-1"><strong>Patient critical</strong></p>
                                 <p>If a situation is critical and your intervention is required to keep them alive until emergency services arrive, you may be asked by the dispatcher to perform medical activities.
                                  </p>`
                                },{
                                    id:2,
                                    title:"Dehyrdation",
                                    imageUrl: "dehyrdation.jpg",
                                    about:"Recognising and treating dehydration (insufficient fluid intake).",
                                    description:`<p>Dehydration can impact on your ability to function at your normal level. Drink if you feel thirsty. </p>
                                    <p>Signs of dehydration:</p>                                  
                                    <ul class="ul_custom_1">
                                    <li>Feeling thirsty</li>
                                    <li>Dark urine</li>
                                    <li>Light headedness</li>
                                    <li>Tiredness</li>
                                    <li>Irritability</li>
                                    <li>Loss of appetite</li>
                                    <li>Fainting</li>                                 
                                </ul>
                                <p class="mb-1"><strong>Responses to consider</strong></p>
                                <p>Reassure the person and help them to sit down.</p>
                                <p>Give them plenty of water. </p>
                                <p>If a person is not recovering in a manner you would expect, call emergency services.</p>
                                <p>If a person has any painful cramps, encourage them to rest. Help them to stretch and massage the muscles that are affected.</p>
                                <p>Monitor the persons level of response.</p> `
                                }
                                ,{
                                    id:3,
                                    title:"Basic Life Support action plan",
                                    imageUrl: "support.jpg",
                                    about:"A first aid action plan covers the steps taken to help an injured or sick person in the first minutes after an illness or injury.",
                                    description:`<p>In an emergency follow the phone operators’ instructions.</p>
                                    <p>Use <strong>DRSABCD</strong> to remember the steps. Think ‘Doctor’s ABCD’ (DRS ABCD).</p>
                                    <table class="table border">
                                    <tbody>
                                        <tr>    
                                        <td><p><strong>D</strong> <br/>Danger</p>
                                        </td>
                                        <td><p>Ensure that the patient and everyone in the area is safe. Do not put yourself or others at risk.
                                         Remove the danger or the patient.</p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>R</strong> <br/>Response</p>
                                        </td>
                                        <td><p>Look for a response from the patient — loudly ask their name, squeeze their shoulder</p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>S</strong> <br/>Send for help</p>
                                        </td>
                                        <td><p>If there is no response, emergency services in your country or ask another person to call. Do not leave the patient.</p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>A</strong> <br/>Airway</p>
                                        </td>
                                        <td><p>Check their mouth and throat is clear. If there is foreign material, roll the patient on their side and clear the airway.
                                         If there is no foreign material, leave them in the position you find them in and gently tilt their head back and lift their chin to clear the airway.</p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>B</strong><br/>Breathing</p>
                                        </td>
                                        <td><p>Check if the person is breathing abnormally or not breathing at all after 10 seconds.
                                         If they are breathing normally, place them in the recovery position and stay with them. If they are not breathing normally, call an ambulance and start CPR.
                                        </p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>C</strong> <br/>CPR</p>
                                        </td>
                                        <td><p>Start CPR: 30 chest compressions followed by 2 breaths. Continue CPR until the patient starts breathing or until help arrives.</p></td>
                                        </tr>
                                        <tr>    
                                        <td><p><strong>D</strong> <br/>Defibrillation</p>
                                        </td>
                                        <td><p>As soon as possible, attach an Automated External Defibrillator (AED) to the patient and follow the voice prompts. Do not leave the patient alone to fetch the defibrillator — let someone else bring it.
                                        </p></td>
                                        </tr>
                                       
                                    </tbody>
                                    </table>`
                                }
                                ,{
                                    id:4,
                                    title:"Unconscious and breathing",
                                    imageUrl: "unconscious.jpg",
                                    about:"If a person does not respond, this may indicate unconsciousness. Call emergency services as soon as possible or ask another person to do it.",
                                    description:`<p>Start the Basic Life Support plan – DRSABCD   </p>
                                    <p><strong>Breathing</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Check for breathing by looking for chest movements (up and down). Listen by putting your ear near to their mouth and nose. Feel for breathing by putting your hand on the lower part of their chest.</li>
                                    <li>If the person is unconscious but breathing, turn them onto their side, carefully ensuring that you keep their head, neck and spine in alignment. This is known as the recovery position
                                    <div class="d-block"><img src="../images/unconscious2.jpg" alt="unconscious" class="img-fluid my-2" /><div>
                                    </li>
                                    <li>Monitor their breathing until you hand over to the ambulance officers.
                                    </li>
                                </ul>
                                    `
                                }
                                ,{
                                    id:5,
                                    title:"Unconscious and not breathing",
                                    imageUrl: "breathing.jpg",
                                    about:"Cardiopulmonary resuscitation (CPR) combines rescue breathing (mouth-to-mouth) and chest compressions to temporarily pump enough blood to the brain until specialised treatment is available.",
                                    description:`<p>If an adult is unconscious and not breathing, make sure they are flat on their back.</p>
                                    <p>Put your mouth over the person’s mouth and blow into their mouth. Make sure no air is leaking.</p>
                                    <p>Give two full breaths to the person (this is called ‘rescue breathing’). </p>
                                    <p>Check their chest is rising and falling. If this is not happening, tilt their head back, pinch their nostrils tightly and seal your mouth to theirs. </p>
                                    <p>If still no luck, check their airway for any obstruction.</p>
                                    <p>If you cannot get air into their lungs, go to chest compressions – this may help shift an obstruction.</p>
                                    <p>Place the heel of one hand in the centre of their chest and your other hand on top. </p>
                                    <p>Press down firmly and smoothly (compressing to one third of their </p>
                                    <p>chest depth) 30 times.</p> 
                                    <p>Give two breaths. </p>
                                    <p>CPR works on the principle of 30 chest compressions and two breaths of rescue breathing (mouth-to-mouth) – known as 30:2).</p>
                                    <p>To get the breath in, tilt their head back gently by lifting their chin. </p>
                                    <p>Pinch their nostrils closed, place your open mouth firmly over their open mouth and blow firmly into their mouth. </p>
                                    <p>Keep going with the 30 compressions and two breaths:</p>
                                    <ul class="ul_custom_1">
                                        <li>Aim for five sets of 30:2 in about two minutes or</li>
                                        <li>Until you hand over to the ambulance officers or</li>
                                        <li>Another trained person or</li>
                                        <li>Until the person you are resuscitating responds.</li>
                                        </ul>
                                        <p class="mb-1"><strong>Defibrillator</strong></p>
                                        <p>As soon as possible, attach an Automated External Defibrillator (AED) to the patient and follow the voice prompts. Do not leave the patient alone to fetch the defibrillator — let someone else bring it.</p>
                                       <p class="mb-1"><strong>Person becomes responsive</strong></p>
                                       <p>A person may begin to move, breathe normally, cough or talk. Put them in the recovery position (onto their side)
                                       </p>`
                                }
                                ,{
                                    id:6,
                                    title:"Defibrillator for cardiac events",
                                    imageUrl: "defibrillator.jpg",
                                    about:"A cardiac arrest is when the heart suddenly stops pumping.<br /> A defibrillator is a device that uses electricity to shock and re-start the heart and shock it back into its correct rhythm. <br />Using a defibrillator greatly increases a person’s chances of survival                                    ",
                                    description:`<p>Defibrillators, also known as Automated External Defibrillators (AEDs) can be found typically on walls in: </p>
                                    <ul class="ul_custom_1">
                                    <li>Shopping malls</li>
                                    <li>Offices</li>
                                    <li>Public libraries</li> 
                                    <li>Schools</li></ul>

                                    <p>You can use a defibrillator whenever CPR is needed. A person needs CPR if they are unresponsive and not breathing normally.</p>
                                    <p>Anyone can use an AED. The device will tell you what to do. AEDs must be used in conjunction with CPR.</p>
                                    <p>Make sure the area around the person is clear. Don’t touch the person while you are using the AED because this could interfere with how it reads the person’s heart.
                                    </p>
                                    `
                                }
                                ,{
                                    id:7,
                                    title:"Bleeding",
                                    imageUrl: "bleeding.jpg",
                                    about:"Bleeding is the loss of blood from the circulatory system.<br /> First aid for severe bleeding is critical in order to limit the loss of blood until emergency medical aid arrives.<br /> Always call first responders in an emergency.",
                                    description:`<p>To manage external bleeding: </p>
                                    <ul class="ul_custom_1">
                                    <li>Applying direct pressure to the wound</li>
                                    <li>Maintaining the pressure using pads and bandages</li>
                                    <li>Raise the injured limb above the level of the heart if possible</li>
                                    </ul>
                                    <p>To manage internal bleeding:
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li>Lay the person down</li>
                                    <li>Raise their legs above the level of their heart</li>
                                    <li>Do not give them anything to eat or drink</li>
                                    </ul>

                                    `
                                }
                                ,{
                                    id:8,
                                    title:"Broken bones",
                                    imageUrl: "broken_bones.jpg",
                                    about:"Causes of bone fractures can include traumatic incidents such as sporting injuries, vehicle accidents and falls.<br />Symptoms depend on the particular bone and the severity of the injury, but may include:<br />Pain <br /> Swelling<br />Bruising<br />Deformity<br />Inability to use the limb.",
                                    description:`<p>Keep the person still – do not move them unless there is an immediate danger.</p>
                                    <p>Attend to any bleeding wounds first. Stop the bleeding by pressing firmly on the site with a clean dressing. If a bone is protruding, apply pressure around the edges of the wound.</p>
                                    <p>If bleeding is controlled, keep the wound covered with a clean dressing</p>
                                    <p>Never try to straighten broken bones.</p>
                                    <p>For a limb fracture, provide support and comfort such as a pillow under the lower leg or forearm. </p>
                                    <p>Use a sling to support an arm or collarbone fracture.</p>
                                    <p>Raise the fractured area if possible and apply a cold pack to reduce swelling and pain.</p>
                                    <p>
                                    Stop the person from eating or drinking anything until they are seen by a doctor, in case they will need surgery.
                                    </p>`
                                }
                                ,{
                                    id:9,
                                    title:"Burns",
                                    imageUrl: "burns.jpg",
                                    about:"Burns can be caused by flames, ultraviolet (UV) radiation, hot liquids, electricity, lightning and certain chemicals. All burns require immediate first aid treatment.<br />Three levels of burns:<br /><strong>Superficial</strong><br/>These burns cause damage to the first or top layer of skin only. The burn site will be red and painful.<br /><strong>Partial thickness</strong><br />These burns cause damage to the first and second skin layers. The burn site will be red, peeling, blistered and swelling with clear or yellow-coloured fluid leaking from the skin. The burn site is very painful.<br /><strong>Full thickness</strong><br />Involves damage to both the first and second skin layers, plus the underlying tissue. The burn site generally appears black or charred with white exposed fatty tissue.<br />Partial and full thickness burns require urgent medical attention.",
                                    description:`<p>Remove yourself or the person from danger and further injury. </p>
                                    <p>Hold the burn under cold running water for 20 minutes. If necessary, prevent heat loss by covering unburnt areas.</p>
                                    <p>Burnt clothing should only be removed if it does not stick to the burn. Do not remove clothing that is stuck to the burn.</p>
                                    <p>Do not apply anything other than water to second or third degree burns until they are fully cooled and medically assessed.</p>
                                    <p>Contact emergency services for partial or full thickness burns or if there are complicating factors. If in doubt, call emergency services.
                                    </p>`
                                }
                                ,{
                                    id:10,
                                    title:"Choking",
                                    imageUrl: "choking.jpg",
                                    about:"Choking is caused when a foreign object, like a hard lump of food, a marble or false teeth goes into the trachea instead of the oesophagus (food pipe).<br />Choking may be a life-threatening medical emergency, because the brain can only survive a few minutes without oxygen.<br />Call emergency services in an emergency.<br />Symptoms of choking:<br />Panicked and distressed behaviour<br />Inability to talk in complete sentences or at full volume<br />Frantic coughing<br />Unusual breathing sounds, such as wheezing or whistling<br />Clutching at the throat",
                                    description:`<p>Encourage a person to breathe and cough. If coughing does not remove the blockage: </p>
                                    <ul class="ul_custom_1">
                                    <li>Call emergency services</li>
                                    <li>Bend the person well forward and give five back blows with the heel of your hand between their shoulder blades – checking if the blockage has been removed after each blow.</li>
                                    <li>If unsuccessful, give five chest thrusts by placing one hand in the middle of their back for support and the heel of the other hand on the lower part of their breastbone – checking if the blockage has been removed after each thrust.</li>
                                </ul>
                                <p>If the person becomes unconscious:</p>
                                <ul class="ul_custom_1">
                                    <li>Call emergency services</li>
                                    <li> Remove any visible obstruction from the mouth.</li>
                                    <li> Commence cardiopulmonary resuscitation (CPR). </li>
                                </ul>
                                    `
                                }
                                ,{
                                    id:11,
                                    title:"Diabetic emergency",
                                    imageUrl: "diabetic.jpg",
                                    about:"People at risk of hypoglycaemia (diabetic emergency) are those with diabetes who are on insulin or certain diabetes medications.                                    Hypoglycaemia means low blood glucose or not having enough glucose in the blood",
                                    description:`<p class="mb-1"><strong>Causes of hypoglycaemia</strong></p>
                                    <ul class="ul_custom_1">
                                    <li> Taken too much insulin or medication </li>
                                    <li> Done more exercise or more intense exercise than usual </li>
                                    <li> Missed a meal or not had enough carbohydrate  </li>
                                    <li>Lost weight and no longer needs the same insulin or medication dose</li>
                                </ul>
                                    <p class="mb-1"><strong>Symptoms of hypoglycaemia</strong></p>
                                    
                                    <ul class="ul_custom_1">
                                    <li>Sweating </li>
                                    <li>Feeling shaky</li>
                                    <li>Fast heart beat</li>
                                    <li>Sudden hunger</li>
                                    <li>Headache</li>
                                </ul>
                                <p class="mb-1"><strong>Treatment</strong></p>
                                    <p>Reassure the person, help them into a comfortable position and give them:</p>
                                    <ul class="ul_custom_1">
                                    <li>Fruit juice </li>
                                    <li>Soft drink (not diet or light)</li>
                                    <li>Candy with sugar</li>
                                    <li>Sugar or honey </li>
                                </ul>
                                <p>Follow up with a sandwich or other food.</p>
                                <p>
                                Call emergency services if in doubt, the person’s condition doesn’t improve, they have trouble breathing or become unconscious.
                                </p>`
                                }
                                ,{
                                    id:12,
                                    title:"Mental distress",
                                    imageUrl: "mental.jpg",
                                    about:"Mental distress is when a person is having a panic attack, experiencing withdrawal, feeling suicidal, reacting to relationship issues, having a psychotic episode, or a mix of these symptoms.",
                                    description:`<p>Remember your personal safety. </p>
                                    <p>Consider the context, but give yourself a distance gap between you and the person in distress. </p>
                                    <p>Contact emergency services if there is a risk of self harm.</p>
                                    <p><strong>Approach</strong>, assess and assist with any crisis - assess the risk of suicide or harm and look for signs of trauma and high anxiety.</p>
                                    <p><strong>Listen</strong> to the person non-judgmentally.</p>
                                    <p><strong>Give</strong> the person reassurance, support and information.</p>
                                    <p><strong>Encourage</strong> the person to seek appropriate professional help.</p>
                                    <p><strong>Encourage</strong> the person to seek self-help and other support strategies.</p>`
                                }
                                ,{
                                    id:13,
                                    title:"Head injury",
                                    imageUrl: "head_injury.jpg",
                                    about:"When someone has a knock to the head, the brain moves about and can knock against the skull and facial bones. This type of injury may cause the brain to swell and even bleed.                                    <br />The most common type of head injury is concussion. Concussion may or may not include loss of consciousness (blackout). The loss of consciousness is often brief and is normally followed by a rapid and complete recovery.                                    <br />Always seek medical attention for a head injury. ",
                                    description:`<p>If you think someone may have a concussion, use the following steps:</p>
                                    <ul class="ul_custom_1">
                                        <li>Apply Basic Life Support First Aid - DRSABCD</li>
                                        <li>Danger - check to make sure the scene is safe.</li>
                                        <li>Response - check for loss of consciousness.</li>
                                        <li>If the person is unconscious, go to ABCD (airway, breathing, circulation, defibrillation)</li>
                                        <li>Do not move the person unless absolutely necessary.</li>
                                        <li>Check the person’s mental awareness.</li>
                                        <li>Check the person’s eyes.</li>
                                        <li>Watch for vomiting.</li>
                                        <li>Keep the person awake for a period of time to see if their condition gets worse.</li>
                                        <li>Be aware that complaints can subside, only to appear later on and be worse.</li>
                                    </ul>
                                    <p class="mb-1">Seek urgent medical care if you have:</p>
                                    <ul class="ul_custom_1">
                                    <li>Severe headaches</li>
                                    <li>Vomited more than twice</li>
                                    <li>Memory problems</li>
                                    <li>Blackouts</li>
                                    <li>A seizure (fit or spasm of arms, legs or face)</li>
                                    <li>Difficulty staying awake</li>
                                    <li>Blood or clear fluid coming from your ears or nose</li>
                                    <li>Neck stiffness</li>
                                    <li>Numbness</li>
                                    <li>Any other concerns</li>
                                   </ul> `
                                }
                                ,{
                                    id:14,
                                    title:"Heart attack",
                                    imageUrl: "heart_attack.jpg",
                                    about:"A heart attack occurs when the blood supply to the heart is blocked and your heart muscle can’t get enough oxygen",
                                    description:`<p><strong>Symptoms</strong></p>
                                    <p>A common symptom of a heart attack is chest pains that may spread to your arms, neck, jaw or back.</p>
                                    <p>The person may be in discomfort, sweaty and pale skin, sick or lightheaded.</p>
                                    <p><strong>Treatment</strong></p>
                                    <p>Get them into a position of comfort. Ask them if they have or need help taking any heart medication they may be using.</p>
                                    <p>Call emergency services immediately or get someone else to do it.</p>
                                    <p>Ask a bystander to locate and return with a defibrillator in the event the persons heart stops.</p>
                                    <p> Follow the Basic Life Support Action Plan DRSABCD.
                                    </p>`
                                }
                                ,{
                                    id:15,
                                    title:"Heat stroke",
                                    imageUrl: "heat_stroke.jpg",
                                    about:"Heat stroke occurs when the body temperature is not controlled properly and it rises above 104F (40°C.).                                    <br />It is the most serious heat-related illness and is a life-threatening emergency. ",
                                    description:`<p><strong>Symptoms</strong></p>
                                    <p>Some symptoms include
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li>  Sudden rise in body temperature</li>
                                    <li>Red, hot dry skin (because sweating has stopped)</li>
                                    <li>Dry, swollen tongue</li> 
                                    <li>Rapid pulse</li>
                                    <li>Rapid shallow breathing</li>
                                    <li>Intense thirst, headache</li>
                                    <li>Nausea and vomiting</li>
                                    <li>Dizziness, confusion, poor coordination or slurred speech</li>
                                    </ul>
                                    <p><strong>Treatment</strong></p>
                                    <p>Call emergency services immediately.</p>
                                    <p>While you are waiting for help, move the person to a cool, shaded area and keep them as still as possible.</p>
                                    <p>Remove excess clothing and give them small sips of water if they are conscious and able to drink.</p>
                                    <p>Cool the person:</p>
                                    <ul class="ul_custom_1">
                                    <li>Gently spraying them with cool water from a spray bottle or garden hose, soaking their clothes with cool water, or sponging their body with cool water.</li>
                                    <li>Place cool packs under their armpits, on the groin or on the back of their neck to reduce body heat.</li></ul>
                                    <p>If the person becomes unconscious, follow the Basic Life Support Action Plan DRSABCD</p>`
                                }
                                ,{
                                    id:16,
                                    title:"Hypothermia",
                                    imageUrl: "hypothermia.jpg",
                                    about:"Hypothermia occurs when the body's temperature drops from the usual healthy 99F (37°C) to below 95 (35 °C). A drop in body temperature to 90F (32 °C) or lower can be life threatening. <br />  Hypothermia can be caused if you spend time in air below 50F (10 °C), or in water below 68F (20 °C). ",
                                    description:`<p class="mb-1"><strong>Symptoms</strong></p>
                                    <ul class="ul_custom_1">
                                        <li>Be shivering uncontrollably</li>
                                        <li>pale skin</li>
                                        <li>Be clumsy and walk unsteadily</li>
                                        <li>Be confused and drowsy</li>
                                        <li>Slow breathing </li>
                                        <li>Dilated pupils </li>
                                        </li>
                                    </ul>
                                    <p class="mb-1"><strong>Treatment</strong></p>
                                    <p>If you suspect someone has hypothermia, contact emergency services immediately.
                                    </p>
                                    <ul class="ul_custom_1">
                                    <li>Move them to somewhere warm </li>
                                    <li>Take off any wet clothes</li>
                                    <li>Warm their head, neck, chest and groin with blankets or wrapped hot water bottles, or get someone warm to hold them</li>
                                    <li>Keep them still</li>
                                    <li>Give them warm drinks, not alcohol</li>
                                </ul>
                                    <p>If the person becomes unconscious, follow the Basic Life Support Action Plan DRSABCD.</p>
                                    `
                                }
                                ,{
                                    id:17,
                                    title:"Poisoning",
                                    imageUrl: "poisoning.jpg",
                                    about:"Poisoning occurs when someone is sufficiently exposed to a substance that can cause illness, injury or death.<br /> Common sources of poisoning include over-the-counter and prescription medicines, cleaning products, pesticides, and animal bites or stings  ",
                                    description:`<p class="mb-1"><strong>Symptoms</strong></p>
                                    <p>Some symptoms include:</p> 
                                    <ul class="ul_custom_1">
                                    <li>Painful, red itching or blistering skin</li>
                                    <li>Excessive sweating</li>
                                    <li>Nausea and vomiting</li>
                                    <li>Drooling</li>
                                    <li>Difficulty breathing</li>
                                    <li>Numbness, tingling and twitching of the mouth and tongue</li>
                                    <li>Stomach or throat pain</li>
                                    <li>Burns in the mouth or throat
                                    </li>
                                    </ul>
                                    <p class="mb-1"><strong>Treatment</strong></p>
                                    <p class="mb-1"><strong>For swallowed poison:</strong></p>
                                    <ul class="ul_custom_1">
                                    <li> Do NOT induce vomiting. It doesn’t reliably remove poisons from the body and can cause more harm.</li>
                                    <li>Pick up the bottle or packet.</li>
                                    <li>Call a Poisons Information Centre or emergency services
                                    </li>
                                    </ul>
                                    <p class="mb-1"><strong>For inhaled poison:</strong></p>
                                    <ul class="ul_custom_1">
                                    <li> Move the person to fresh air quickly, if it’s safe to do so.
                                    Open doors and windows wide, if it’s safe to do so.</li>
                                    <li>  Call a Poisons Information Centre or emergency services</li>
                                    <li>  Call a Poisons Information Centre or emergency services</li>
                                    </li></ul>
                                    <p class="mb-1"><strong>For skin exposure to poison:</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Remove any affected clothes.</li>
                                    <li>Don’t touch the chemical or exposed area yourself.
                                    <li>Flood the skin with cool running water for 15 minutes, then wash with soap and water.</li>
                                    <li>Call a Poisons Information Centre or emergency services</li>
                                    </ul>

                                    <p class="mb-1"><strong>For eye exposure to poison: </p>
                                    </strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Hold eyelids open and flood with tap water from a cup, jug or from a slowly running tap for 10 - 15 minutes.</li>
                                    <li>Call a Poisons Information Centre or emergency services</li>
                                    </ul>
                                    <p>Call emergency services immediately if someone stops breathing, slips into a coma, has a seizure (fit) or a severe allergic reaction (anaphylaxis).</p>
                                    <p> If the person becomes unconscious, follow the Basic Life Support Action Plan DRSABCD.
                                    </p>`
                                }
                                ,{
                                    id:18,
                                    title:"Stings and bites (insect)",
                                    imageUrl: "stings.jpg",
                                    about:"An insect bite will leave a puncture wound in the skin. The type of insect that you are bitten by can determine what type of reaction you will have",
                                    description:`<p class="mb-1"><strong>Symptoms</strong></p>
                                    <p>Common symptoms of a sting include:  </p>
                                   <ul class="ul_custom_1">
                                    <li>An intense burning feeling</li>
                                    <li>Redness around the sting site</li>
                                    <li>Pain which generally eases after an hour or so</li>
                                    <li>Swelling around the sting</li>
                                    </ul>    
                                    <p class="mb-1"><strong>Treatment</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Removal of the insect or venom sack</li>
                                    <li>Try not to scratch the area</li>
                                    <li>Try a cool bath or shower to help soothe the itching </li>
                                    <li>Wear loose cotton clothing, to help prevent overheating</li> 
                                    <li>Use an ice pack, not placed directly against the skin</li>
                                    </ul>
                                    <p class="mb-1"><strong>Anaphylactic shock</strong></p>
                                    <p>Occasionally some people have a severe allergic reaction to being bitten or stung by an insect.</p>
                                    <p>In cases of severe allergic reaction, the whole body can react within minutes to the bite or sting which can lead to anaphylaxis. Anaphylaxis is very serious and can be fatal. </p>
                                    <p>Follow the persons treatment plan. This may include administering adrenaline to the person via an adrenaline (epinephrine) autoinjector (such as EpiPen or Anapen) if one is available.</p>
                                    <p>If the person becomes unconscious, follow the Basic Life Support Action Plan DRSABCD.
                                    </p>
                                 `
                                }
                                ,{
                                    id:19,
                                    title:"Motorcycle accident",
                                    imageUrl: "motorcycle_accident.jpg",
                                    about:"Rider wearing a helmet.",
                                    description:`<p>Helmets should never be removed unless deemed completely necessary and the persons breathing is severely restricted or unable to breathe.</p>
                                    <p>Do NOT remove the helmet if there is only one person or you are not confident to do so correctly.</p>
                                    <p>Contact emergency services who will advise further.</p>
                                    <p>If the person becomes unconscious, follow the Basic Life Support Action Plan DRSABCD.
                                     </p>`
                                },{
                                    id:20,
                                    title:"Seizure",
                                    imageUrl: "seizure.jpg",
                                    about:"Seizures are caused by rapid and uncoordinated electrical firing in the brain. This can cause temporary abnormalities in behaviours, movements, sensations or a loss of consciousness.",
                                    description:`<p class="mb-1"><strong>Symptoms</strong></p>
                                    <ul class="ul_custom_1">
                                        <li>Loss of consciousness </li>
                                        <li>Impaired thinking</li>
                                        <li>Numbness or tingling sensations</li>
                                        <li>Excess saliva coming from mouth</li>
                                        <li>Increased heart rate</li>
                                        </ul>
                                        <p class="mb-1"><strong>Treatment</strong></p>
                                        <ul class="ul_custom_1">
                                        <li>Don’t try to restrain the person or stop the jerking. The main thing is to prevent them from injuring themselves. Don’t move the person unless they are in danger. Put something soft under their head, remove any sharp or unstable objects from the area and stay with them.</li>
                                        <li>There is no danger they will swallow their tongue. Don’t put anything in their mouth and make sure there is no fluid or vomit that could choke them.</li>
                                        <li>Time the seizure and keep an eye on their breathing.</li>
                                        <li>Talk to them calmly to reassure them, until they regain consciousness.</li>
                                        <li>When the seizure stops, put them on their side in the recovery position. If they have vomited or have food or fluid in their mouth put them in the recovery position immediately.</li>
                                        <li>If they fall asleep after the seizure don’t disturb them, but keep monitoring their breathing.</li>
                                        <li>Don’t let them have anything to eat or drink until the seizure has completely stopped. If possible, someone should go home with them.</li>
                                        </ul>
                                        <p class="mb-1">Call emergency services if:</p>
                                        <ul class="ul_custom_1">
                                        <li>the seizure continues for more than five minutes or a second seizure quickly follows the first</li>
                                        <li>the person has been injured</li>
                                        <li>the person has diabetes or is pregnant</li>
                                        <li>you know, or believe it to be the person's first seizure</li>
                                        <li>there is food, vomit or fluid in the mouth</li>
                                        </ul>
                                        <p>Follow the Basic Life Support Action Plan DRSABCD.
                                        </p>
                                        

                                    `
                                },{
                                    id:21,
                                    title:"Eye injury",
                                    imageUrl: "eye_injury.jpg",
                                    about:"A foreign body is an object in your eye that shouldn’t be there, such as a speck of dust or wood chip.",
                                    description:`<p class="mb-1"><strong>Minor</strong></p>
                                    <p>Minor injuries include but are not limited to:</p>
                                    <ul class="ul_custom_1">
                                    <li>Dirt</li>
                                    <li>Insect</li>
                                    </ul>
                                    <p><strong>Treatment</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Wash your hands before touching your eyes</li>
                                    <li>Rest your finger on your cheek and pull down the lower eyelid.</li>
                                    <li>Tilt your head back and drop in behind your lower eyelid saline (sterile salt water) or if unavailable, use clean water to flush out any dust and dirt.</li>
                                    <li>Monitor</li>
                                    </ul> 
                                    <p><strong>Major</strong></p>
                                    <p>Do not try to remove a foreign body from an eye yourself.
                                    <p>Major eye injuries include but are not limited to:
                                    <ul class="ul_custom_1">
                                    <li>Penetration by a foreign object</li>
                                    <li>Blurry or impaired vision</li>
                                    <li>Clear or bloody fluid is coming from your eyeball </li>
                                    <li>You are concerned for any other reason.</li>
                                    </ul>
                                    <p><strong>Treatment</strong></p>
                                    <p>Contact emergency services or seek immediate treatment from medical eye specialists. </p>`
                                },{
                                    id:22,
                                    title:"Overdose",
                                    imageUrl: "overdose.jpg",
                                    about:"Alcohol, medications, illegal drugs and some herbal remedies can cause harm if you take too much. This is called overdose",
                                    description:`<p>The risk of overdose increases when you take more than one of these substances at a time, or if your body is not used to taking a substance.</p>
                                    <p class="mb-1"><strong> Symptoms</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>nausea and vomiting</li>
                                    <li>severe stomach pain and abdominal cramps</li>
                                    <li>diarrhoea</li>
                                    <li>chest pain</li>
                                    <li>dizziness</li>
                                    <li>loss of balance</li>
                                    <li>loss of co-ordination</li>
                                    <li>being unresponsive, but awake</li>
                                    </ul>
                                    <p class="mb-1"><strong>Treatment</strong></p>
                                    <ul class="ul_custom_1">
                                    <li>Stay calm</li>
                                    <li>Call emergency services.</li>
                                    <li>Follow the Basic Life Support Action Plan DRSABCD.</li>
                                    <li>Check breathing and monitor their condition until help arrives.</li>
                                    <li>Do not try to make the person vomit.</li>
                                    <li>Do not give them anything to eat or drink.</li>
                                    <li>Keep any pill containers to take to the hospital.</li>
                                    </ul>`
                                }


                            ]
                        }
                ],
            }
],
    }
];