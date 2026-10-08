export interface Service {
  slug: string;
  name: string;
  short: string;              // card blurb on the home page
  metaTitle: string;          // <=60 chars
  metaDesc: string;           // <=155 chars, ends with a CTA + phone
  h1: string;
  image: string;              // /img/services/<slug>.svg; every page needs one
  imageAlt: string;
  intro: string[];            // 2-3 paragraphs (~150 words)
  bullets: { label: string; text: string }[];
  body: { h: string; p: string[] }[]; // 2-3 sections, ~150 words each
  faq: { q: string; a: string }[];    // 4+ entries -> FAQPage schema
}

// Honesty rules for this file: San Joaquin Towing is a dispatch and referral
// service, so copy never claims to own trucks, never states prices as fact, and
// never quotes response-time statistics. ETAs and prices come from the
// dispatcher on the call, and the copy says exactly that.
export const SERVICES: Service[] = [
  {
    slug: 'emergency-towing',
    name: '24 Hour Towing',
    short: "Broken down on I-5, Highway 99 or a Stockton side street at any hour. One call gets a local truck moving.",
    metaTitle: '24 Hour Towing in Stockton, CA | San Joaquin Towing',
    metaDesc: "24/7 tow truck dispatch in Stockton and San Joaquin County. A real person answers, you get a quote and an ETA first. Call (209) 850-7623.",
    h1: '24 Hour Towing in Stockton, CA',
    image: '/img/services/emergency-towing.svg',
    imageAlt: 'Illustration of a tow truck with amber lights stopped on the shoulder of Highway 99 in Stockton at night, with orchard rows and fog on the horizon',
    intro: [
      "Cars quit at bad times. It might be the southbound I-5 shoulder past the Eight Mile Road exit at two in the morning, or the Highway 99 off-ramp at Hammer Lane during the evening rush. Or a dead engine in the Sherwood Mall lot an hour after closing. Wherever it happens in San Joaquin County, one call to (209) 850-ROAD reaches a dispatcher who knows where that is without asking you to spell it.",
      "We are a local dispatch service. We take your location, your vehicle and where it needs to go, then send the nearest available licensed tow operator working the Stockton area. Before anything rolls, you hear an estimated arrival time and the price. If either one does not work for you, you can say no and nothing is owed."
    ],
    bullets: [
      { label: 'A person answers', text: 'Day or night, a dispatcher picks up. You are not routed through a phone tree in another state.' },
      { label: 'Quote before the truck moves', text: 'Hook-up, mileage and any extras are spelled out on the call, so the bill matches what you agreed to.' },
      { label: 'Local operators', text: 'Licensed independent tow operators who work Stockton, Lodi, Manteca and Tracy every day.' }
    ],
    body: [
      {
        h: 'What happens in the first few minutes after you call',
        p: [
          "The dispatcher's first question is where you are. On a freeway, the nearest exit and your direction of travel matter more than anything else: \"northbound 99, just past the Arch Road exit\" gets a truck to the right side of the median. On a surface street, a cross street or a business name is enough. Pin drops from your phone work too.",
          "Next comes the vehicle, what is wrong with it if you know, and where you want it to go. A shop, your driveway in Brookside, a dealership on the Miracle Mile, or a Bay Area address all change the quote. With that, the dispatcher finds the closest operator with the right truck, confirms the price and an ETA with you, and sends the job. You will usually get the driver's name or a callback once they are rolling."
        ]
      },
      {
        h: 'Why Stockton breakdowns cluster where they do',
        p: [
          "Stockton is where I-5, Highway 99 and the Crosstown Freeway (Highway 4) meet, so a lot of the county's through traffic funnels through a few miles of road. Short merges on the Crosstown and the stop-and-go stretch of 99 between Hammer Lane and Arch Road are hard on tired transmissions and cooling systems, and the shoulders there are tight.",
          "The valley's weather adds its own pattern. From June through September, triple-digit afternoons finish off weak batteries and push marginal radiators past their limit, especially in traffic. From November through February, tule fog drops visibility on I-5 and 99 to a few car lengths, and chain-reaction collisions follow. Those two seasons are when the phones are busiest, and when knowing exactly where you are saves the most time."
        ]
      },
      {
        h: 'How to stay safe while you wait on a Valley freeway',
        p: [
          "If the car can still roll, get it as far right as you can, ideally past the end of a guardrail or onto an off-ramp. Hazards on. On I-5 and 99, big rigs pass close and fast, so staying belted inside the car is often safer than standing beside it. If there is a safe spot well behind the guardrail, that is better still. Never stand between your car and traffic.",
          "At night or in fog, keep your parking lights on so the tow operator and other drivers can see you. If you feel unsafe or anyone is hurt, call 911 first, then call us."
        ]
      }
    ],
    faq: [
      {
        q: 'How fast can a tow truck get to me in Stockton?',
        a: "It depends on where the nearest available operator is and what traffic is doing at that hour. The dispatcher gives you a specific ETA on the call before you agree to anything, and if it is too long for you, you are free to decline."
      },
      {
        q: 'How much does a tow cost in Stockton?',
        a: "Most local tows are priced as a hook-up fee plus mileage, with extras for things like winching, after-hours work or a vehicle that will not roll. The exact figure depends on your vehicle and destination, and you get it on the phone before a truck is sent."
      },
      {
        q: 'Are you really open 24 hours?',
        a: "Yes. Calls are answered around the clock, including weekends and holidays. Late-night and early-morning calls are a big part of what we handle."
      },
      {
        q: 'Can you tow my car to a shop that is closed right now?',
        a: "Often, yes. Many Stockton shops have an after-hours key drop and allow vehicles to be left in their lot. Tell the dispatcher the shop name and they will confirm it with you. Otherwise the car can go to your home and move to the shop in the morning."
      },
      {
        q: 'What should I have ready when I call?',
        a: "Your location (freeway direction and nearest exit, or a cross street), the make and model, whether the car rolls and steers, and where you want it taken. If it is all-wheel drive or electric, say so, because that decides which truck is sent."
      }
    ]
  },
  {
    slug: 'flatbed-towing',
    name: 'Flatbed Towing',
    short: 'All four wheels off the ground for AWD, EVs, low cars and anything you would rather not drag.',
    metaTitle: 'Flatbed Towing in Stockton, CA | San Joaquin Towing',
    metaDesc: "Flatbed tow trucks for AWD, electric, lowered and classic cars in Stockton, Lodi, Manteca and Tracy. Quote first, 24/7. Call (209) 850-7623.",
    h1: 'Flatbed Towing in Stockton, CA',
    image: '/img/services/flatbed-towing.svg',
    imageAlt: 'Side view diagram of a flatbed tow truck with its bed tilted down and a car being winched up onto it, all four wheels clear of the road',
    intro: [
      "A flatbed, sometimes called a rollback, tilts its whole bed to the ground and winches your vehicle up onto it. All four wheels ride on the deck, so nothing turns and nothing drags. For a lot of modern cars that is the only way the manufacturer says they should be moved.",
      "We dispatch flatbeds across Stockton, Lodi, Manteca and Tracy around the clock. Tell the dispatcher your vehicle and they will confirm whether it needs a flatbed or can safely go on a wheel-lift, which is sometimes cheaper. You hear the price and the ETA before anything is sent."
    ],
    bullets: [
      { label: 'AWD and 4WD', text: 'Lifting one axle on an all-wheel-drive car can damage the center differential. A flatbed avoids that entirely.' },
      { label: 'Electric vehicles', text: 'Most EV makers specify a flatbed. Spinning drive wheels can feed current back into the motor.' },
      { label: 'Low and classic cars', text: 'Low-angle loading for lowered cars, sports cars and anything with a spoiler you want to keep.' },
      { label: 'Non-rolling vehicles', text: 'Locked brakes, a seized wheel or collision damage? The car can be winched up even if it will not roll.' }
    ],
    body: [
      {
        h: 'When you actually need a flatbed (and when you do not)',
        p: [
          "You need a flatbed if your vehicle is all-wheel drive, which covers most Subarus, many crossovers and a lot of trucks with full-time 4WD. It is also the right call for any EV or hybrid where the owner's manual says so. That includes Teslas, which are common around Spanos Park and Brookside. Lowered cars, exotics, classics, and anything with damage to a wheel or suspension belong on a deck too.",
          "You may not need one for an ordinary front-wheel-drive sedan going a few miles across town. A wheel-lift picks up the front wheels and the rear rolls on the road, which is fine for that car. Some people still ask for a flatbed for peace of mind, and that is a reasonable choice. Just ask the dispatcher about the difference in price first."
        ]
      },
      {
        h: 'Longer moves out of the valley',
        p: [
          "A lot of Stockton tows do not end in Stockton. People move cars to dealerships in the East Bay over the Altamont, to a specialist shop in Sacramento, or home to Modesto after a breakdown on 99. For anything more than a short local run, a flatbed is easier on the car and on the driver.",
          "Long tows are quoted on total distance, and the dispatcher can give you that figure on the phone. If you are going over the Altamont on I-580, keep in mind the grade and the afternoon wind there. Operators prefer a flatbed for high-sided loads and for anything they would rather not have swaying behind them on that stretch."
        ]
      },
      {
        h: 'Getting your car ready to load',
        p: [
          "Take out anything valuable, plus anything you will need overnight: house keys, a phone charger, medication, a child seat. Leave the car key with the driver; they will need it to steer and to put the car in neutral. If you have an EV, find the transport or tow mode in the settings before the truck arrives, since it can save ten minutes of fiddling in the dark."
        ]
      }
    ],
    faq: [
      {
        q: 'Is a flatbed tow more expensive than a regular tow?',
        a: "Sometimes slightly, depending on the operator and the distance. For AWD, electric and damaged vehicles it is the correct way to tow, so it is not really optional. The dispatcher will quote both options when both are safe for your car."
      },
      {
        q: 'Can you flatbed a car with no keys?',
        a: "Usually, yes, with extra equipment such as wheel dollies or skates to handle locked steering and a car stuck in park. Mention it on the call so the right gear comes and the quote is accurate."
      },
      {
        q: 'Do I need a flatbed for my Tesla?',
        a: "Yes. Tesla and most other EV makers call for a flatbed. Put the car in transport mode if the screen still works, and tell the dispatcher it is electric when you call."
      },
      {
        q: 'Can I ride in the tow truck?',
        a: "Often one passenger can ride along, but it depends on the operator and the truck's cab. Ask when you call so it is settled before the driver arrives."
      }
    ]
  },
  {
    slug: 'accident-recovery',
    name: 'Accident Towing',
    short: 'Collision on I-5, 99 or a Stockton intersection. Towing to a body shop, a storage yard or home.',
    metaTitle: 'Accident Towing in Stockton, CA | San Joaquin Towing',
    metaDesc: "Accident and collision towing in Stockton and San Joaquin County. Help with CHP scenes, body shops and storage, 24/7. Call (209) 850-7623.",
    h1: 'Accident Towing in Stockton, CA',
    image: '/img/services/accident-recovery.svg',
    imageAlt: 'Diagram of a collision scene on a two-lane Stockton road with a damaged car, a patrol car with flashing lights, and a flatbed backing in to load',
    intro: [
      "After a crash, the first job is people. Call 911 if anyone is hurt or if vehicles are blocking traffic. Once everyone is safe and the police or CHP have what they need, the car still has to go somewhere. That is where we come in.",
      "Our dispatchers send licensed tow operators to collision scenes across Stockton, Lodi, Manteca and Tracy. They cover everything from a fender-bender in the Weberstown Mall lot to a car that ended up in the gravel off Highway 12. You get a quote before the truck rolls, and you choose where the car goes: your body shop, your insurer's preferred shop, or home."
    ],
    bullets: [
      { label: 'Your choice of destination', text: 'You pick the shop. You are not required to send the car to whoever the truck driver suggests.' },
      { label: 'Damaged vehicles', text: 'Flatbeds and dollies for cars that will not roll, steer or sit level after impact.' },
      { label: 'Debris cleanup', text: 'Operators sweep glass and pick up loose parts from the roadway as part of the job.' }
    ],
    body: [
      {
        h: 'Police rotation tows versus calling your own',
        p: [
          "When the CHP or Stockton Police handle a crash and the driver cannot arrange a tow, or the car is blocking a lane, the officer usually calls the next truck on their rotation list. That tow is not your choice, and the vehicle may go to that company's storage yard, where daily storage fees start adding up.",
          "If you are able to make arrangements and the officer agrees there is time, you can usually request your own tow. Call us, give the dispatcher your location and tell the officer a truck is on the way. If the officer has already called rotation, that truck takes the car. You can still have it moved later from the yard to your shop, and we can help with that."
        ]
      },
      {
        h: 'Where the valley sees the most collisions',
        p: [
          "Tule fog is the big one. Between late fall and February, dense ground fog settles over I-5 between Lodi and Tracy and over Highway 99 through Stockton and Manteca. It has caused multi-vehicle pileups on both. If you are caught in a fog collision, stay buckled in your car unless it is on fire or in a travel lane, because the next car may not see you either.",
          "Year-round, the merges on the Crosstown Freeway, the 99 and 120 interchange in Manteca, and the Highway 12 corridor west of Lodi produce a steady stream of calls. Harvest season brings slow farm equipment and double-trailer tomato trucks onto the same roads as commuters, and the speed difference causes rear-end crashes."
        ]
      },
      {
        h: 'Insurance, storage and paperwork',
        p: [
          "Most auto policies with collision coverage reimburse a reasonable tow to a repair facility. Keep your receipt, and give your insurer the tow operator's details. If your car went to a rotation yard, move it quickly. Storage is billed by the day, and insurers do not always cover all of it if you wait. Before a car leaves a police tow yard, you generally need proof of ownership, your ID and, in some cases, a release from the agency."
        ]
      }
    ],
    faq: [
      {
        q: 'Who pays for the tow after an accident?',
        a: "If the other driver is at fault, their insurer usually ends up covering it, but you may need to pay up front and be reimbursed. If you have collision coverage, your own policy normally covers a tow to a repair shop. Keep every receipt."
      },
      {
        q: 'Can I choose where my car is towed after a crash?',
        a: "Yes, as long as you are able to arrange it and the officer on scene has not already called a rotation tow. You can send it to any shop you like or to your home."
      },
      {
        q: 'My car was towed from an accident scene and I do not know where it is. What do I do?',
        a: "Call the agency that handled the crash: CHP for freeways and county roads, Stockton Police or the local city police for city streets. They will tell you which yard has the car and what you need to release it."
      },
      {
        q: 'Can you move my car from a tow yard to my body shop?',
        a: "Yes. Once the yard has released it to you, we can dispatch a truck to move it to your shop. Do it soon, since storage is charged daily."
      },
      {
        q: 'What should I do at the scene while I wait?',
        a: "Get to a safe spot away from traffic and exchange information with the other driver. Take photos of the vehicles, the plates and the road. Leave the airbags and any fluids alone. If you smell fuel, move well away from the car."
      }
    ]
  },
  {
    slug: 'jump-start',
    name: 'Jump Start',
    short: 'Dead battery in a driveway, a parking lot or the shoulder. A truck comes to you with a jump pack.',
    metaTitle: 'Jump Start Service in Stockton, CA | San Joaquin Towing',
    metaDesc: "Dead battery in Stockton, Lodi, Manteca or Tracy? Roadside jump start dispatched 24/7, with a quote before anyone drives out. Call (209) 850-7623.",
    h1: 'Jump Start Service in Stockton, CA',
    image: '/img/services/jump-start.svg',
    imageAlt: 'Cutaway illustration of a car battery with heat lines, a thermometer reading over 100 degrees, and jumper clamps on the terminals',
    intro: [
      "A car that clicks and will not crank usually has a battery that has given up, and in the valley that tends to happen in two seasons. The first is the back half of summer, after weeks of 100-degree afternoons. The second is the first cold morning of winter. Either way, you are stuck in a driveway in Lincoln Village, a parking lot outside a Lodi winery, or on the shoulder of I-205.",
      "Call and we will dispatch a roadside operator with a commercial jump pack. If the car starts, you drive off. If it does not, the operator can tell you what they think is wrong, and the dispatcher can turn the call into a tow without you starting over."
    ],
    bullets: [
      { label: 'Comes to you', text: 'Home, work, store parking lots, apartment garages and freeway shoulders.' },
      { label: 'Quoted up front', text: 'You hear the service call price before anyone drives out.' },
      { label: 'Tow if it will not start', text: 'If the jump fails, the same call can become a tow to your shop.' }
    ],
    body: [
      {
        h: 'Why valley heat kills batteries',
        p: [
          "Most people think cold kills batteries, and cold is when it shows. The damage is mostly done in summer. Heat speeds up the chemistry inside a lead-acid battery, which wears out the plates and evaporates the electrolyte. A Stockton summer with long runs of 100-degree days takes a real toll on a battery that is already three or four years old. It may limp through August and then fail on the first chilly November morning, when the engine needs more cranking power.",
          "If your battery is more than about four years old and the engine has started to crank slowly, have it tested. Most auto parts stores along Pacific Avenue and March Lane will do it for free. That costs nothing and can save you a service call."
        ]
      },
      {
        h: 'When a jump will not fix it',
        p: [
          "A jump gets the engine running. It does not recharge a dead battery or fix a bad alternator. If the car starts on a jump and then dies again within a few minutes, or the battery warning light stays on while you drive, the alternator is a likely suspect, and you will want to head straight to a shop or have it towed.",
          "If you hear nothing at all when you turn the key, check that the car is in park and try again with your foot firmly on the brake. On push-button cars, hold the fob right against the start button, since a dead fob battery can mimic a dead car battery. Corroded or loose terminals also cause no-starts. Sometimes tightening a clamp is all it takes."
        ]
      },
      {
        h: 'Jumping it yourself versus calling',
        p: [
          "If you have cables, a friend and a car you can park nose to nose, a jump is a five-minute job, and you do not need us for it. It gets harder in a tight parking structure, on a freeway shoulder, with a hybrid or EV whose 12-volt battery hides behind a trim panel, or late at night with nobody around. Those are good times to call."
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a jump start cost in Stockton?',
        a: "It is a flat roadside service call. The dispatcher quotes the exact price on the phone before anyone is sent, and it depends mainly on location and time of day."
      },
      {
        q: 'Can you jump a hybrid or electric car?',
        a: "Most hybrids and EVs have a small 12-volt battery that runs the electronics, and it can go flat like any other. Operators can usually jump it through the designated terminals. Tell the dispatcher the make and model."
      },
      {
        q: 'Will you sell me a new battery on the spot?',
        a: "Battery replacement is not a standard part of the service call, and availability depends on the operator. If the jump fails, the simplest answer is usually a tow to a shop or parts store."
      },
      {
        q: 'My car started after the jump. How long should I drive it?',
        a: "Drive for at least 20–30 minutes, ideally on the freeway rather than in stop-and-go traffic. Then have the battery and charging system tested soon, because a battery that died once is likely to do it again."
      }
    ]
  },
  {
    slug: 'lockout-service',
    name: 'Car Lockout',
    short: 'Keys locked inside, or the fob is dead and the door will not open. A roadside tech opens it without damage.',
    metaTitle: 'Car Lockout Service in Stockton, CA | San Joaquin Towing',
    metaDesc: "Locked out of your car in Stockton or San Joaquin County? 24/7 lockout dispatch, with a quote before anyone is sent. Call (209) 850-7623.",
    h1: 'Car Lockout Service in Stockton, CA',
    image: '/img/services/lockout-service.svg',
    imageAlt: 'Illustration of a car door with an inflatable wedge and a long-reach tool used to unlock it, with the keys visible on the seat inside',
    intro: [
      "Keys on the driver's seat, doors locked. It happens at the gas pump on Hammer Lane, at the Lodi Lake parking lot, and in apartment carports all over Stockton. It is maddening, but it is one of the simplest roadside calls there is.",
      "Call and we will dispatch a roadside operator with lockout tools. They use an inflatable wedge to open a small gap at the door frame, then a long-reach tool to hit the unlock button or pull the handle. They do not use a slim jim on the window channel the way old movies show. Done right, it leaves no marks."
    ],
    bullets: [
      { label: 'Child or pet inside', text: 'Call 911 first if a child or animal is locked in a hot car. Then call us.' },
      { label: 'Damage-free entry', text: 'Wedge and reach tools, not prying or broken glass.' },
      { label: 'Proof of ownership', text: 'Expect to show ID and registration once the door is open. That protects you too.' }
    ],
    body: [
      {
        h: 'If a child or pet is locked in the car',
        p: [
          "Call 911 first. Do not wait for a roadside operator. In a Stockton summer, the inside of a closed car can pass 120 degrees within minutes, even with the windows cracked, and emergency services treat a locked-in child as a life-threatening call. Police and fire crews can force entry immediately.",
          "Once 911 has been called, call us as well if you like. If emergency crews arrive first, let them handle it. A broken window is cheap compared with the alternative."
        ]
      },
      {
        h: 'What the operator will ask for',
        p: [
          "Before opening your car, a responsible operator will want reasonable proof that it is yours. Usually that means your ID, matched against the registration or insurance card inside the car once it is open. Some people find this annoying in the moment, but it is the same check that stops someone else from having your car opened.",
          "If your ID is locked inside too, tell the dispatcher. The operator can usually open the car, then check your ID and registration before you drive away."
        ]
      },
      {
        h: 'Lost keys and dead fobs are different problems',
        p: [
          "A lockout service gets you into the car. It does not make a new key. If your keys are lost rather than locked inside, you will need a locksmith or a dealership to cut and program a replacement, and the car may need a tow to the dealer. The dispatcher can help you work out which you need.",
          "Also check the fob itself. Many push-button cars still have a physical key hidden in the fob, and a hidden keyhole under a small cap on the driver's door handle. A dead fob battery is a common cause of 'locked out' calls."
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a car lockout cost in Stockton?',
        a: "It is a flat service call, quoted by the dispatcher before anyone is sent. Price can vary with the time of day and how far the operator has to travel."
      },
      {
        q: 'Will opening my car cause damage?',
        a: "Not when it is done with the right tools. The operator uses an air wedge to open a narrow gap and a reach tool to hit the unlock button. Ask them to take extra care with frameless windows and with the trim that covers side-curtain airbags."
      },
      {
        q: 'Can you open my trunk if the keys are in it?',
        a: "Often, yes, by unlocking the cabin first and using the trunk release or fold-down rear seats. Some cars do not have an interior path to the trunk, so tell the dispatcher the model."
      },
      {
        q: 'Can you make me a new key?',
        a: "No. Lockout service opens the car. Replacement keys and fob programming are a locksmith or dealer job, though we can tow the car to a dealer if needed."
      }
    ]
  },
  {
    slug: 'tire-change',
    name: 'Flat Tire Change',
    short: 'Flat on the shoulder or in a lot. An operator mounts your spare so you can get to a tire shop.',
    metaTitle: 'Flat Tire Change in Stockton, CA | San Joaquin Towing',
    metaDesc: "Flat tire in Stockton, Lodi, Manteca or Tracy? Roadside tire change dispatched 24/7, or a tow if there is no spare. Call (209) 850-7623.",
    h1: 'Flat Tire Change in Stockton, CA',
    image: '/img/services/tire-change.svg',
    imageAlt: 'Diagram of a car on a jack on a road shoulder with a flat tire removed and a compact spare ready to mount, with a safety triangle behind',
    intro: [
      "A flat is manageable in your driveway. On the right shoulder of I-5 near the Port with trucks passing three feet away, it is a different story. The same goes for 99 through Manteca in the dark, or a gravel turnout on a levee road in the Delta.",
      "Call and we will dispatch a roadside operator to mount your spare. They bring a floor jack and impact gun, which matters when lug nuts were last tightened by a shop air tool. If there is no usable spare, or the wheel itself is damaged, the dispatcher can quote a tow to a tire shop instead."
    ],
    bullets: [
      { label: 'Your spare, mounted', text: 'Full-size or compact spare, installed and tightened, with pressure checked.' },
      { label: 'No spare tire', text: 'Many newer cars ship with only a repair kit. A short tow to a tire shop solves it.' },
      { label: 'Locking lug nuts', text: 'Have the key ready. It is usually in the glovebox or under the cargo floor.' }
    ],
    body: [
      {
        h: 'Why so many flats on valley roads',
        p: [
          "Stockton and the surrounding towns have a lot of truck traffic and a lot of debris. Pallets, strap hooks and tread from blown truck tires end up on I-5 near the Port and the warehouses along Arch-Airport Road. Construction zones on 99 and county roads add screws and nails.",
          "Then there is the heat. Under-inflated tires run hot, and a 105-degree afternoon on asphalt is when a weak tire finally fails. Check your pressures in the morning before the tires warm up, and set them to the number on the sticker inside the driver's door, not the maximum printed on the sidewall."
        ]
      },
      {
        h: 'Should you change it yourself?',
        p: [
          "In a quiet parking lot or your driveway, with a working jack and a spare that holds air, you probably can. Loosen the lugs before you jack the car up, and use the jack point marked under the door, not the plastic trim.",
          "On a freeway shoulder, think hard first. The left side of a car on the right shoulder faces traffic, so a flat on that side means kneeling in the lane line. If you cannot get fully off the road, call CHP on 911 for help with traffic, then call us. Never trust the factory scissor jack on soft ground or a slope, which is common on levee and orchard roads."
        ]
      },
      {
        h: 'Driving on a compact spare',
        p: [
          "A compact spare, or donut, is a temporary tire. Most are rated for about 50 mph and a limited distance, which is printed on the sidewall. That is enough to get across Stockton to a tire shop, but not to commute over the Altamont on it. Get the flat repaired or replaced within a day or two."
        ]
      }
    ],
    faq: [
      {
        q: 'What if I do not have a spare tire?',
        a: "Plenty of newer cars come with only an inflator kit. If that will not seal it, the dispatcher can quote a tow to the nearest open tire shop or to your home."
      },
      {
        q: 'Can you fix the flat instead of putting on the spare?',
        a: "Roadside service is focused on mounting your spare. Plug repairs need to be done properly at a shop, where the tire can be checked from the inside."
      },
      {
        q: 'I have run-flat tires. Do I still need help?',
        a: "Run-flats let you drive a limited distance at reduced speed after losing pressure. If you are within that range, drive to a tire shop. If the warning came on a while ago or the sidewall is damaged, call for a tow."
      },
      {
        q: 'How much does a roadside tire change cost?',
        a: "It is a flat service call quoted on the phone. Things that can change it include time of day, distance, and whether the job needs extra equipment such as a heavy-duty jack for a pickup."
      }
    ]
  },
  {
    slug: 'fuel-delivery',
    name: 'Fuel Delivery',
    short: 'Ran dry on the freeway or a back road. Enough fuel is delivered to get you to the next station.',
    metaTitle: 'Fuel Delivery in Stockton, CA | San Joaquin Towing',
    metaDesc: "Out of gas in Stockton or San Joaquin County? Emergency fuel delivery dispatched 24/7, enough to reach a station. Call (209) 850-7623.",
    h1: 'Fuel Delivery in Stockton, CA',
    image: '/img/services/fuel-delivery.svg',
    imageAlt: 'Illustration of a fuel can pouring into a car filler neck on a rural road shoulder, with a fuel gauge on empty and a distant gas station sign',
    intro: [
      "It happens more often than people admit. Maybe the gauge was lying, or the next exit was farther than you thought. The run from Stockton down I-5 toward Westley, or across the Delta on Highway 12, goes a long way between gas stations.",
      "Call and we will dispatch a roadside operator with a few gallons of fuel, enough to get you to the nearest station. Tell the dispatcher whether you need regular unleaded or diesel. Putting the wrong fuel in is a far bigger problem than running out."
    ],
    bullets: [
      { label: 'Gas or diesel', text: 'Say which fuel your vehicle takes. Diesel pickups are common out here.' },
      { label: 'Enough to reach a pump', text: 'A few gallons to reach a station, not a full tank.' },
      { label: 'If it will not restart', text: 'Some cars need priming after running dry. If it will not catch, the call can become a tow.' }
    ],
    body: [
      {
        h: 'Where people run out in San Joaquin County',
        p: [
          "Inside Stockton there is a station every mile or two, so running dry in town usually means the gauge or the sender has failed. The longer gaps are on the edges. I-5 south of Tracy toward the Westley and Patterson exits has long stretches with few services. Highway 12 crosses the Delta between Lodi and Rio Vista with very little along the way. Levee roads such as Eight Mile Road west of I-5, and the county roads out toward Thornton and Holt, are similar.",
          "If you are getting low on one of those stretches, it is usually better to turn back toward town than to push on hoping for a station."
        ]
      },
      {
        h: 'Running out of gas can damage some cars',
        p: [
          "On most modern cars, the fuel pump sits inside the tank and is cooled by the fuel around it. Running the tank dry, or driving on fumes regularly, makes the pump run hot and can shorten its life. Sediment from the bottom of the tank can also get pulled into the filter.",
          "Diesels are fussier. Many need the fuel system bled or primed after running dry before they will start again. If you drive a diesel pickup, say so when you call, and be prepared for the possibility that a tow is the faster answer."
        ]
      },
      {
        h: 'If you put in the wrong fuel',
        p: [
          "Do not start the engine. If you realize at the pump that you put gas in a diesel, or diesel in a gas car, leave it off and call. Running it circulates the wrong fuel through the system and turns a tank drain into a much bigger repair. The car will need to be towed to a shop that can drain the tank."
        ]
      }
    ],
    faq: [
      {
        q: 'How much fuel do you bring?',
        a: "Enough to get you safely to the nearest open station, typically a couple of gallons. It is meant to get you moving, not to fill the tank."
      },
      {
        q: 'Do I pay for the fuel separately?',
        a: "The dispatcher will tell you how the service call and the fuel are priced when you call. There are no surprises at the roadside."
      },
      {
        q: 'Can you bring diesel?',
        a: "Yes, as long as you say so when you call. Diesel vehicles may need priming after running dry, so the dispatcher may suggest a tow instead."
      },
      {
        q: 'My car will not start even after adding fuel. What now?',
        a: "Give the fuel pump a few key cycles (turn to on, wait a few seconds, off, repeat) before cranking. If it still will not start, the operator or dispatcher can arrange a tow."
      }
    ]
  },
  {
    slug: 'winch-out',
    name: 'Winch Out and Ditch Recovery',
    short: 'Stuck in mud, sand, a ditch or an orchard row. Pulled back onto solid ground with a winch line.',
    metaTitle: 'Winch Out Service in Stockton, CA | San Joaquin Towing',
    metaDesc: "Stuck in a ditch, mud or a levee shoulder in San Joaquin County? Winch-out and recovery dispatched 24/7, quote first. Call (209) 850-7623.",
    h1: 'Winch Out and Ditch Recovery in San Joaquin County',
    image: '/img/services/winch-out.svg',
    imageAlt: 'Diagram of a tow truck on a levee road winching a car up out of a muddy ditch, with a slough and orchard trees in the background',
    intro: [
      "A winch-out is for a car that runs fine but cannot get itself back onto the road. That might mean the front wheels slid off a rain-soaked shoulder on a Delta levee road, or a pickup sank into a vineyard row near Lodi. Sometimes a car just slid into a drainage ditch in the fog.",
      "Call and we will dispatch an operator with a winch and the gear to rig it properly. The truck parks on solid ground and runs a cable to your vehicle. Using snatch blocks if needed, it pulls the car straight out instead of dragging it sideways. The goal is to get you back on the pavement without more damage than you already have."
    ],
    bullets: [
      { label: 'Mud, sand and ditches', text: 'Orchard and vineyard rows, soft shoulders, drainage ditches and river access roads.' },
      { label: 'Rigged properly', text: 'Attached to a recovery point or the frame, not a bumper cover or a suspension arm.' },
      { label: 'Tow if needed', text: 'If the car is damaged once it is out, the same truck can tow it.' }
    ],
    body: [
      {
        h: 'Valley soil, Delta peat and winter rain',
        p: [
          "Much of San Joaquin County is flat farmland, and after the first real winter rain the ground stops behaving like ground. Orchard and vineyard soils around Lodi, Linden and Escalon turn to slick clay. On the Delta islands west of Stockton, the soil is largely peat, which is soft even when it looks dry and swallows a tire once it breaks through.",
          "Levee roads such as Eight Mile Road, Bacon Island Road and the roads around Thornton and Terminous have narrow, crumbling shoulders with a steep drop to a ditch or a slough on one side. Dropping a wheel off the pavement in the dark or in fog is easy, and getting it back on without help is hard."
        ]
      },
      {
        h: 'What not to do when you are stuck',
        p: [
          "Do not keep spinning the wheels. It digs the tires deeper, polishes the mud under them and overheats the transmission. On clay, a few seconds of wheelspin can turn a simple pull into a dig-out. Do not let a friend yank you out with a tow strap tied to a bumper or a tie-down hook. Those parts are not made for that load, and a strap that snaps or a hook that breaks free becomes a projectile.",
          "If you are near water, such as a slough, a canal or the river, and the car is tipping, get out and away from it. Call 911 if the car is in or near water, or if anyone is hurt."
        ]
      },
      {
        h: 'Off-road trucks and Carnegie',
        p: [
          "South of Tracy, Corral Hollow Road leads up to the Carnegie off-road area, and plenty of lifted trucks and side-by-sides get stuck or broken on the way out. If you are on a public road or an access road, tell the dispatcher exactly where. Recovery inside a park or on private trails depends on access, and the dispatcher will tell you honestly whether an operator can reach you."
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a winch-out cost?',
        a: "It depends on how far the truck has to reach, how deep the car is in, and whether extra rigging is needed. The dispatcher will ask a few questions, then quote it."
      },
      {
        q: 'Will winching damage my car?',
        a: "When it is rigged to a proper recovery point or the frame and pulled in a straight line, the risk is low. Damage usually comes from pulling on the wrong part or dragging a car sideways over a curb, which is what a proper operator avoids."
      },
      {
        q: 'Can you pull my car out of a canal or a slough?',
        a: "If the car is in or near water, call 911 first. Water recovery after everyone is safe is specialized work that may need heavier equipment. Tell the dispatcher the details so they send the right operator."
      },
      {
        q: 'Can you get to me on a dirt or farm road?',
        a: "Often, yes, if the road will hold a tow truck. Describe the surface honestly. A tow truck that gets stuck itself helps nobody, so the operator may need to work from the nearest firm ground with a longer line."
      }
    ]
  },
  {
    slug: 'motorcycle-towing',
    name: 'Motorcycle Towing',
    short: 'Bikes moved on a flatbed with wheel chocks and soft straps, never dragged on a wheel-lift.',
    metaTitle: 'Motorcycle Towing in Stockton, CA | San Joaquin Towing',
    metaDesc: "Motorcycle towing in Stockton and San Joaquin County. Flatbed transport with chocks and soft straps, 24/7 dispatch. Call (209) 850-7623.",
    h1: 'Motorcycle Towing in Stockton, CA',
    image: '/img/services/motorcycle-towing.svg',
    imageAlt: 'Diagram of a motorcycle secured on a flatbed with a front wheel chock and four soft straps pulling down and outward at the bars and rear frame',
    intro: [
      "Motorcycles cannot be hooked up like a car. A bike has to ride on a flatbed with its front wheel in a chock and soft straps holding it upright from four points. Tied down badly, it can fall over in the first turn.",
      "We dispatch operators who are set up to carry bikes, across Stockton, Lodi, Manteca and Tracy. That covers sport bikes broken down on 99, cruisers stranded on a ride out Highway 88 toward the foothills, and dirt bikes coming back from Carnegie with a problem. Tell the dispatcher the make and model and whether it rolls, and you get a quote before anything is sent."
    ],
    bullets: [
      { label: 'Flatbed with a chock', text: 'The front wheel goes into a chock and the bike stays upright the whole way.' },
      { label: 'Soft straps', text: 'Soft loops on the bars and frame keep hooks off painted parts and chrome.' },
      { label: 'Any style', text: 'Cruisers, sport bikes, adventure bikes, dirt bikes and scooters.' }
    ],
    body: [
      {
        h: 'How a bike should be strapped down',
        p: [
          "The front wheel goes into a chock so it cannot turn. Two soft straps go from the lower triple clamp or the handlebars down and forward to the deck, compressing the front suspension partway. Two more go from the rear frame or passenger pegs down and back. The bike ends up held in a firm triangle that cannot rock.",
          "Watch for hooks touching brake lines, wiring or plastic fairings, and do not let anyone compress the forks fully. If your bike has a known weak spot, such as aftermarket bars, a fragile fender or a low exhaust, mention it to the operator before they start."
        ]
      },
      {
        h: 'After a crash or a tip-over',
        p: [
          "If you went down, get checked out even if you feel fine, because adrenaline hides a lot. Once you are safe, take photos of the bike where it lies and of the road. Do not try to ride a bike with bent bars, a damaged footpeg or a leaking fork home. A low-speed tip-over in a parking lot can still crack a brake lever or a clutch perch, and that only shows up when you need it.",
          "Operators can load a bike that will not roll, using a wheel dolly or by winching it gently up the deck. Tell the dispatcher what is damaged."
        ]
      }
    ],
    faq: [
      {
        q: 'Can you tow a motorcycle with a regular tow truck?',
        a: "Not with a wheel-lift. A bike needs a flatbed or a trailer with a chock and proper soft straps, and that is what is dispatched for motorcycle calls."
      },
      {
        q: 'How much does it cost to tow a motorcycle?',
        a: "It is priced like a flatbed tow, by distance and conditions. The dispatcher gives you the price on the phone before a truck is sent."
      },
      {
        q: 'Can I ride with my bike?',
        a: "Often there is room for one passenger in the cab, depending on the operator. Ask when you call."
      },
      {
        q: 'Can you tow a heavy touring bike?',
        a: "Yes. Big touring bikes and baggers are heavy and wide, so mention it so the operator brings the right chock and enough straps."
      }
    ]
  },
  {
    slug: 'heavy-duty-towing',
    name: 'Heavy Duty and Commercial Towing',
    short: 'Box trucks, RVs, buses and fleet vehicles on I-5, 99 and the warehouse corridors.',
    metaTitle: 'Heavy Duty Towing in Stockton, CA | San Joaquin Towing',
    metaDesc: "Heavy and medium duty towing for box trucks, RVs, buses and fleets in Stockton and San Joaquin County. 24/7 dispatch. Call (209) 850-7623.",
    h1: 'Heavy Duty and Commercial Towing in Stockton, CA',
    image: '/img/services/heavy-duty-towing.svg',
    imageAlt: 'Illustration of a heavy wrecker with an underlift towing a box truck past warehouse buildings and container cranes at the Port of Stockton',
    intro: [
      "Stockton is a freight town. The Port, the distribution centers along Arch-Airport Road and in the Tracy and Lathrop industrial parks, and the I-5 and 99 corridors put a lot of trucks on the road. When one of them breaks down, a light-duty wrecker is not enough.",
      "We dispatch operators with medium and heavy duty equipment for box trucks, delivery vans, RVs, buses, small dump trucks and fleet vehicles. Give the dispatcher the vehicle type, approximate weight, whether it is loaded, and where it is. They will match it with an operator who has the right truck and quote the job before anything is sent."
    ],
    bullets: [
      { label: 'Matched to weight', text: "The dispatcher asks for weight and axle configuration so the right class of wrecker comes the first time." },
      { label: 'Fleet friendly', text: 'Works with your fleet manager or maintenance shop on billing and destination.' },
      { label: 'RVs and motorhomes', text: 'Class A, C and fifth-wheel issues on the way to the foothills or the Delta.' }
    ],
    body: [
      {
        h: 'What the dispatcher needs to know',
        p: [
          "Heavier vehicles take more planning. Expect questions about the vehicle type and make, the gross vehicle weight rating (on the door-jamb sticker), whether it is loaded, and how many axles it has. The dispatcher will also ask whether it has air brakes, which matters because a truck with no air pressure will have its spring brakes locked. Then they need to know where it is and which direction it faces.",
          "With that, they can send a wrecker that can actually lift it, rather than a light truck that turns up, takes one look and leaves. If the vehicle is blocking a lane on I-5 or 99, CHP will be involved, and they may call their own heavy rotation tow."
        ]
      },
      {
        h: 'Warehouse and distribution corridors',
        p: [
          "Arch-Airport Road near the Stockton airport, the International Park of Commerce in Tracy, and the industrial parks around Lathrop and the 120 Bypass are home to large distribution buildings and a constant stream of box trucks and vans. A breakdown inside a yard or at a dock has different access rules from one on the road. Tell the dispatcher the facility name and the gate, and have someone ready to let the operator in.",
          "For fleets, a single point of contact for repeat calls makes life easier. Ask the dispatcher how to set up billing for your company."
        ]
      },
      {
        h: 'RVs on the way out of town',
        p: [
          "Highway 120 through Manteca is the main route to Yosemite, and 88 heads east toward the Sierra. Summer weekends bring a lot of motorhomes and travel trailers through the valley heat, and overheating and tire failures are common. Large RVs often need a heavy wrecker or a specialized lowboy, and the dispatcher will ask for length and weight. If the RV is towing a car, mention that as well."
        ]
      }
    ],
    faq: [
      {
        q: 'Can you tow a box truck or a delivery van?',
        a: "Yes. Give the dispatcher the make, model, rough weight and whether it is loaded."
      },
      {
        q: 'Do you tow semi-trucks?',
        a: "Class 8 tractor-trailers need heavy rotators or wreckers, which only some operators run. Call with the details, and the dispatcher will tell you straight away whether an operator with that kind of equipment is free to take the job."
      },
      {
        q: 'Can you tow my RV?',
        a: "Most motorhomes and travel trailers can be handled with the right equipment. Give the length, weight and what is wrong, plus whether you are towing a car behind it."
      },
      {
        q: 'Can you invoice our company instead of the driver paying?',
        a: "Ask about commercial billing when you call. For regular fleet work, set it up in advance."
      }
    ]
  },
  {
    slug: 'long-distance-towing',
    name: 'Long Distance Towing',
    short: 'Out of the valley to the Bay Area, Sacramento or beyond. Flatbed transport quoted on the full trip.',
    metaTitle: 'Long Distance Towing from Stockton, CA | San Joaquin Towing',
    metaDesc: "Long distance towing from Stockton and San Joaquin County to the Bay Area, Sacramento and beyond. Full-trip quote first. Call (209) 850-7623.",
    h1: 'Long Distance Towing from Stockton, CA',
    image: '/img/services/long-distance-towing.svg',
    imageAlt: 'Illustration of a flatbed carrying a car west on I-580 over the Altamont Pass at dusk, with wind turbines on the ridges and a green sign pointing to the Bay Area',
    intro: [
      "Plenty of tows start in San Joaquin County and end somewhere else. A car breaks down on Highway 99 on the way home to Fresno, or someone wants their own dealership in Pleasanton to do the warranty work. Others buy a project car in Lodi that lives in Sacramento, or move house and need the second car brought along.",
      "We dispatch flatbeds for those longer runs around the clock. Tell the dispatcher where the vehicle is, where it is going and what it is, and you will hear a quote for the whole trip and a pickup time before anything is booked. Nothing is owed if you decide against it."
    ],
    bullets: [
      { label: 'Quoted on the full trip', text: 'Total miles from pickup to drop-off, plus anything the job needs, spelled out on the call.' },
      { label: 'Flatbed by default', text: 'All four wheels on the deck for the whole drive, which is easier on the car over long distances.' },
      { label: 'Schedule ahead or go now', text: 'Same-night runs after a breakdown, or a booked pickup for a planned move.' }
    ],
    body: [
      {
        h: 'Where long tows from here usually go',
        p: [
          "West over the Altamont on I-580 is the most common route. People send cars to Bay Area dealerships and specialist shops in Livermore, Pleasanton, Oakland and San Jose. North on I-5 or Highway 99 leads to Sacramento and its suburbs, and south on 99 runs through Modesto and Merced toward Fresno. Each of those is a long run, so the quote matters more than it does on a cross-town tow.",
          "The Altamont deserves a mention. It is a long climb with strong afternoon winds, and operators plan around it. A flatbed keeps the car stable and level the whole way, which is one reason it is the default for longer moves."
        ]
      },
      {
        h: 'How to compare a long-distance quote',
        p: [
          "Ask what the quote covers. A fair long-distance price is built on the loaded miles from pickup to drop-off, and some operators also count part of the return trip. Ask about tolls, after-hours pickup and anything special about the vehicle, such as a car that will not roll or an EV that needs transport mode.",
          "Then compare it with the local option. If a good shop in Stockton, Lodi or Tracy can do the repair, a short tow there may cost far less than a long one to your usual mechanic. The dispatcher can quote both so you can decide with real numbers."
        ]
      },
      {
        h: 'Getting the car ready for a long trip',
        p: [
          "Take out anything valuable, plus anything you will need before the car arrives: house keys, garage remotes, documents and chargers. Tell the dispatcher who will meet the truck at the other end and give a phone number for them. Leave the key with the driver. If the car is electric, put it in transport mode before loading."
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a long distance tow from Stockton cost?',
        a: "It depends mostly on total distance, plus the vehicle and any extras such as a non-rolling car. The dispatcher gives you the full price on the phone before anything is booked."
      },
      {
        q: 'Can you tow my car from Stockton to the Bay Area?',
        a: "Yes. Runs over the Altamont to the East Bay, the Peninsula and San Jose are among the most common long tows. Tell the dispatcher the exact drop-off address."
      },
      {
        q: 'Can I schedule a long distance tow for later?',
        a: "Yes. For a planned move, book a pickup time in advance. For a breakdown, a truck can usually be arranged the same day or night."
      },
      {
        q: 'Do I need to be there when the car is picked up or dropped off?',
        a: "Someone needs to hand over the key and confirm the vehicle at pickup, and someone should be at the other end to receive it. It does not have to be you, as long as the dispatcher has their name and number."
      }
    ]
  },
  {
    slug: 'tow-yard-transfer',
    name: 'Tow Yard Transfer',
    short: 'Your car is released from a tow or storage yard. We move it to your shop or home before storage piles up.',
    metaTitle: 'Tow Yard Car Transfer in Stockton, CA | San Joaquin Towing',
    metaDesc: "Move your car from a Stockton tow or storage yard to a body shop, mechanic or home once it is released. Quote first, 24/7 dispatch. Call (209) 850-7623.",
    h1: 'Tow Yard Car Transfer in Stockton, CA',
    image: '/img/services/tow-yard-transfer.svg',
    imageAlt: 'Diagram of a flatbed leaving a fenced vehicle storage yard with a car on its deck, following a dashed route to a body shop with a garage door',
    intro: [
      "After a crash or a police tow, a car often ends up in a storage yard it was never meant to stay in. Every day there adds a storage charge. If the car will not drive, you still need a way to get it to your body shop, your mechanic or your driveway.",
      "Once the yard has released the vehicle to you, call us. The dispatcher arranges a truck to meet you at the yard, load the car and take it where it needs to go. You hear the price and the timing on the call, before anything is booked."
    ],
    bullets: [
      { label: 'Stop the storage clock', text: 'Storage is billed daily, so moving the car promptly usually saves more than the tow costs.' },
      { label: 'Damaged cars welcome', text: 'Flatbeds and dollies for vehicles that will not roll, steer or start after a collision.' },
      { label: 'You choose the shop', text: 'Your insurer may suggest one, but where the car is repaired is your decision.' }
    ],
    body: [
      {
        h: 'Get the release first, then call the truck',
        p: [
          "A yard will only hand a vehicle over once it has been released. For a police or CHP tow, that may mean getting a release from the agency first. For any yard, it usually means showing ID and proof of ownership and paying the tow and storage charges. Our guide to getting a towed car back in Stockton walks through it.",
          "Most yards release a vehicle only to the registered owner or someone with written authorization. Plan to be at the yard when our truck arrives, or check with the yard ahead of time about what they accept. Ask about their hours too, because some yards keep short release windows on weekends."
        ]
      },
      {
        h: 'Why moving the car quickly matters',
        p: [
          "Storage fees add up every day, and insurers do not always cover all of them if the car sits longer than necessary. A car in a yard also cannot be inspected by your adjuster or repaired by your shop. Moving it to the shop starts the repair clock instead of the storage clock.",
          "If you are unsure where the car should go, ask your insurer whether they need to inspect it first. Some will look at it at the yard and others at the shop. Settle that before booking the move, so the car only has to travel once."
        ]
      }
    ],
    faq: [
      {
        q: 'Can you pick up my car from a tow yard in Stockton?',
        a: "Yes, once the yard has released it to you. The dispatcher arranges a truck to meet you there and take the car to your shop, your home or another address."
      },
      {
        q: 'Do I have to be at the tow yard for the pickup?',
        a: "Usually, yes. Most yards release vehicles only to the registered owner or someone with written authorization, so plan to meet the truck or check the yard's rules first."
      },
      {
        q: 'How much does it cost to move a car out of a tow yard?',
        a: "It is priced like a regular tow: a hook-up fee plus mileage, with extras if the car will not roll. You get the full price on the call before anything is booked."
      },
      {
        q: 'Will my insurance pay for moving the car to a body shop?',
        a: "With collision coverage, or when another driver's insurer accepts fault, a tow to the repair shop is often covered. Ask your adjuster and keep the receipt."
      }
    ]
  }
];
