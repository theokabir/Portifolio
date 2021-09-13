export default function Body({ language }){
  return(
    <div className="md:col-span-2 md:p-4">
      <div>
        <h4>Sobre mim</h4>
        <p>texto sobre mim</p>
      </div>
      <div>
        <h4>Experiência proficional</h4>
        <ul>
          <li>Nenhuma experiência profissional até o momento</li>
        </ul>
      </div>
      <div>
        <h4>habilidades</h4>
        <h5>Principais</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
        <h5>Básico</h5>
        <ul>
          <li>C++</li>
          <li>C#</li>
          <li>Dart/Flutter</li>
          <li>Java</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>VueJS</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  )
}