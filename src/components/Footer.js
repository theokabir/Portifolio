export default function Footer({ language }){
  return (
    <footer className="text-center text-white p-4 bg-blueGray-900 mt-4">
      <p>{language.footer.by}: Theo Kabir Novais de Carvalho</p>
      <p>
        {language.footer.contact}: <a href="mailto:theokabir3003@gmail.com" className="
        text-blue-500 hover:underline
        ">
          theokabir3003@gmail.com
        </a>
      </p>
    </footer>
  )
}