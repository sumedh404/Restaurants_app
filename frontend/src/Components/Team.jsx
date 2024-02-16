import { data } from "../restApi.json";

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM </h1>
          <p>
            Behind the scenes, our dynamic team of <b>chefs, servers, </b>and <b>kitchen
            staff</b> operates with seamless precision, united by a shared
            commitment to excellence. Their unwavering dedication ensures that
            every aspect of your dining experience is flawlessly executed, from
            the first greeting to the final bite, leaving a lasting impression
            of professionalism and hospitality.
          </p>
        </div>
        <div className="team_container">
        {
            data[0].team.map(element=>{
                return(
                    
                    <div className="card" key={element.id}>
                    <img src={element.image} alt={element.name}></img>
                    <h3>{element.name}</h3>
                    <p>{element.designation}</p>
                    </div>
                )
            })
        }
        </div>
      </div>
    </section>
  );
}
export default Team;
