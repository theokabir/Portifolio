import profilePic from '../../assets/profile.png'

export default function Profile({ language }){
  return (
    <div className="md:col-span-1 border-b md:border-b-0 md:border-r p-4">
      <div className="w-32 h-32 rounded-full overflow-hidden m-auto">
        <img src={profilePic} alt="Minha imagen" className="object-cover" />
      </div>
      <div className="my-4 border-b-2 border-white pb-4">
        <p>Théo Kabir Novais de Carvalho</p>
        <p>Email: <a href="mailto:theokabir3003@gmail.com" className="text-blue-400 hover:underline">theokabir3003@gmail.com</a></p>
        <p>GitHub: <a target="_blank" href="https://github.com/theokabir" className="text-blue-400 hover:underline">github.com/theokabir</a></p>
      </div>
      <div>
        <h4 className="font-titles">Escolaridade</h4>
        <ul className="list-disc list-inside">
          <li>Cursando Ensino médio técnico em desenvolvimento de sistemas na Etec da Zona Leste</li>
        </ul>
      </div>
    </div>
  )
}