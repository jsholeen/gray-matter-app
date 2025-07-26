import SectionTemplate from "../components/SectionTemplate";


const Food = () => {
  return (
    <>
    <SectionTemplate title="Metabolic Rounds" />
        <div>
                  <h2>Metabolic Rounds</h2>
                  <p>
                    This sheet contains suggestions if you’re stumped after a quick search on your phone.<br />
                    <strong>Vegetarian (V)/Halal (H)</strong>. Intra-hospital restaurants are listed.
                  </p>
            
                  <h3>TMC Commons (Waterside Food Court)</h3>
                  <ul>
                    <li><strong>Hours of Operation:</strong> 8 AM – 2 PM (Mon-Fri)</li>
                    <li>Starbucks: 8 AM – 5 PM (Mon-Fri)</li>
                    <li><strong>Options:</strong>
                      <ul>
                        <li>Subway (V) - Long Lines</li>
                        <li>Chick Fil-A - Long Lines</li>
                        <li>Gyro (V/H)</li>
                        <li>Time for Thai (V) - Short Line</li>
                        <li>Starbucks</li>
                        <li>BBQ Place</li>
                      </ul>
                    </li>
                  </ul>
            
                  <h3>Vegetarian/Halal Options Nearby</h3>
                  <ul>
                    <li>Chipotle</li>
                    <li>Halal Guys</li>
                    <li>Pizza Hut (a bit far on Holcombe)</li>
                    <li>Gyros in TMC Commons</li>
                    <li>Subway in TMC Commons</li>
                    <li>Piada</li>
                    <li>Cava</li>
                    <li>Daves’ Hot Chicken</li>
                  </ul>
            
                  <h3>Student Deals</h3>
                  <ul>
                    <li>Piada - $9.77 with student ID (M-F 2-5 PM, all day Wednesday)</li>
                    <li>Gyro King: TMC Discount</li>
                    <li>Poke in the Bowl $11 for students (Need ID)</li>
                  </ul>
            
                  <h3>Intra-Hospital Cafeterias</h3>
                  <p>All have limited vegetarian/halal options.</p>
                  <div className="table-container">
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: '#f5f5f5' }}>
                        <th>Main Location</th>
                        <th>Sub-location</th>
                        <th>Hours</th>
                        <th>Servings</th>
                        <th>Vegetarian</th>
                        <th>Halal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BSLMC</td>
                        <td>TMC (B1 level)</td>
                        <td>Daily 6:30AM – 8PM</td>
                        <td>Anything</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>BSLMC</td>
                        <td>McNair (1st floor lobby)</td>
                        <td>Mon-Fri: Breakfast 7:30AM–10AM, Lunch 11AM–2PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Chick-Fil-A @ Wallace 3rd floor</td>
                        <td>Mon-Fri 7AM–6PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Subway @ Wallace 3rd floor</td>
                        <td>Mon-Fri 11AM–6PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Market Street Coffee Bar @ Wallace 3rd floor</td>
                        <td>Mon-Fri 6:30AM–6PM</td>
                        <td></td>
                        <td>✅</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Pavilion for Women 3rd floor Coffee Corner</td>
                        <td>Mon-Fri 6AM–8PM, Sat-Sun 7AM–3PM</td>
                        <td>Starbucks</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Pavilion for Women 3rd floor café</td>
                        <td>Daily 6:30AM–8PM, 11PM–3AM</td>
                        <td>Hot food, grab-and-go</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Feigen Tower 1st floor café</td>
                        <td>Mon-Fri 7AM–2PM</td>
                        <td>Breakfast, Lunch, Coffee</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TCH</td>
                        <td>Abercrombie 1st floor</td>
                        <td>Daily 6AM–10AM, 11AM–2PM, 8PM–1AM</td>
                        <td>Baked Vending, Breakfast, sandwiches, salads</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>TIRR</td>
                        <td>Cafeteria</td>
                        <td>Mon-Fri 7AM–6:30PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Ben Taub</td>
                        <td>Basement Cafeteria</td>
                        <td>Mon-Fri 7AM–8PM, Sat-Sun 11AM–6PM</td>
                        <td>Cafeteria</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>MD Anderson</td>
                        <td>Café Anderson Main Building, Floor 1</td>
                        <td>Mon-Fri 6AM–8:30PM, Weekends 7AM–7:30PM</td>
                        <td>Hot entrees, pizzas, Chick-fil-A, grab-and-go, sushi, desserts</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>MD Anderson</td>
                        <td>Café in The Park, Main Building, Floor 2</td>
                        <td>Open 24/7</td>
                        <td>Starbucks, pastries, snacks, salads, sandwiches</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>MD Anderson</td>
                        <td>Smoothie King at Café in the Park</td>
                        <td>Mon-Fri 10AM–7PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>VA</td>
                        <td>Patriot Café</td>
                        <td>Mon-Fri 6AM–8PM, Sat & Sun 8AM–2:30PM</td>
                        <td>Cafeteria, Pizza, Smoothie</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Main Baylor</td>
                        <td>Morrison Café</td>
                        <td>Mon-Fri 7AM–2PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Dunn Tower Fannin Street Café, Floor 1</td>
                        <td>Mon-Fri 6:30AM–6PM, Weekends 6:30AM–12PM</td>
                        <td>Starbucks</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Dunn Tower The Market Place, Floor 1</td>
                        <td>Daily 6:30AM–8PM</td>
                        <td>Cafeteria</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Outpatient Center Blue Water Café, Floor 2</td>
                        <td>Mon–Fri 6:30AM–2PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Outpatient Center Blue Water Espresso Bar, Floor 2</td>
                        <td>Mon–Fri 6:30AM–4PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Scurlock Tower Blackwater Coffee Roasters, Floor 2</td>
                        <td>Mon–Fri 6:30AM–4PM, Sat 7:30AM–11:30AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Scurlock Tower The French Corner, Floor 2</td>
                        <td>Mon–Fri 10AM–6PM, Sat 10AM–3PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Scurlock Tower Miller's Café, Floor 1</td>
                        <td>Mon–Fri 10AM–6PM, Sat 10AM–3PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Scurlock Tower Poblano's Restaurant, Floor 1</td>
                        <td>Mon–Fri 7AM–3PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Smith Tower Alonti Café, Floor 2</td>
                        <td>Mon–Fri 6AM–5PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Walter Tower Einstein Bros. Bagels, Floor 1</td>
                        <td>Mon–Fri 6AM–1PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Houston Methodist</td>
                        <td>Texas Sky Café, Floor 2, near atrium</td>
                        <td>Mon–Fri 6:30AM–10PM</td>
                        <td></td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                </>


  );
};

export default Food;
