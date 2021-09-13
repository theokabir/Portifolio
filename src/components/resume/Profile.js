import profilePic from '../../assets/profile.png'

export default function Profile({ language }){
  return (
    <div className="md:col-span-1 md:border-r p-4 border-white">
      {/* imagen */}
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={profilePic} alt="Minha imagen" className="object-cover" />
      </div>
      {/* contatos e informações */}
      <div>
        <p>Nome: Théo Kabir Novais de Carvalho</p>
        <p>Email: <a href="mailto:theokabir3003@gmail.com">theokabir3003@gmail.com</a></p>
        <p>GitHub: <a target="_blank" href="https://github.com/theokabir">github.com/theokabir</a></p>
      </div>
      {/* escolaridade */}
      <div>
        <h4>Escolaridade</h4>
        <p>Cursando Ensino médio técnico em desenvolvimento de sistemas na Etec da Zona Leste</p>
      </div>
    </div>
  )
}