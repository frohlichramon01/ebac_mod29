import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim:</Titulo>
    <Paragrafo tipo='principal'>Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt quia eos temporibus tempora voluptas
      tempore incidunt ipsa, reprehenderit ipsam molestias minima
      dolores nihil corrupti aspernatur mollitia explicabo et vitae. Modi.
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=frohlichramon01&show_icons=true&locale=en&theme=tokyonight" alt="GitHub Stats"/>
    <img src="https://streak-stats.demolab.com/?user=frohlichramon01&theme=tokyonight" alt="GitHub Stats"/>
    </GithubSecao>
  </section>
)

export default Sobre
