/* eslint-disable react/no-unescaped-entities */

import {data} from '../restApi.json';
function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading"> POPULAR DISHES</h1>
          <p>
            Indulge in our menu's array of popular dishes, from <b> sizzling steak
            fajitas to creamy chicken alfredo,</b>  satisfying every craving with
            each delectable bite.
          </p>
          <p>
            Savor our renowned classics like <b>succulent grilled salmon,
            mouthwatering beef burgers, and creamy chicken tikka masala</b>, all
            beloved favorites that promise to delight discerning diners time and
            time again.
          </p>
        </div>
        <div className="dishes_container">

        {
            data[0].dishes.map(element=>(
                <div className="card" key={element.id}>
                 <img src={element.image} alt={element.title} />
                 <h3>{element.title}</h3>
                 <button>{element.category}</button>
                </div>
            ))
        }
        
        </div>
      </div>
    </section>
  );
}
export default Menu;
