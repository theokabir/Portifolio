export default function Body({ language }){
  return(
    <div className="md:col-span-2 p-4">
      <div>
        <h4 className="text-xl underline mb-2">Sobre mim</h4>
        <p style={{textIndent: 20}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam similique nulla! Assumenda officiis inventore alias cupiditate rerum natus obcaecati repellat minima ipsam ex distinctio veritatis, porro tempore ipsa ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, architecto officia ut veritatis labore ab amet esse distinctio illum totam excepturi possimus dolorum, nihil eius, iste praesentium quaerat vel. Omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quas voluptas, rerum reiciendis impedit excepturi asperiores dignissimos veritatis aspernatur officia, possimus deleniti, et harum illum similique sed vero eum facere.</p>
      </div>
      <div>
        <h4 className="text-xl underline mt-4 mb-2">Experiência proficional</h4>
        <ul className="list-disc list-inside">
          <li>Nenhuma experiência profissional até o momento</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl underline mt-4 mb-2">habilidades</h4>
        <div className="md:grid grid-cols-2 justify-between">
          <div>
            <h5>Tecnológicas</h5>
            <ul className="list-disc list-inside">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <h5>Básico</h5>
            <ul className="list-disc list-inside">
              <li>C#</li>
              <li>Dart</li>
              <li>Java</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>VueJS</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h5>Outras</h5>
            <ul className="list-disc list-inside">
              <li>Word: Intermediário</li>
              <li>power Point: Intermediário</li>
              <li>Inglês: Intermediário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}