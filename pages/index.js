import { useState, useEffect } from 'react';

import NavBar from '../components/NavBar'
import styles from './home.module.scss'
import Image from 'next/image'

import { SonyCarousel, SonyContainer } from '../components/SonyComponents'
import CardsPortfolio from '../components/Cards';

var item = [
  {
    title: 'Desenvolvedor Web',
    description: 'Sou desenvolvedor Web com o domínio das seguintes tecnologias: Javascript, Node, React e Next JS',
    image: '/images/home/web.png'
  },
  {
    title: 'Desenvolvedor Desktop',
    description: 'Sou desenvolvedor Desktop com o domínio das seguintes tecnologias: Delphi, C/C++ e C#',
    image: '/images/home/desktop.png'

  },
  {
    title: 'Data Science',
    description: 'Sou Desenvolvedor de soluções de aprendizado de maquina usando as seguintes tecnologias: Python(Numpy,Sklearn e tensorflow) e R',
    image: '/images/home/dataScience.png'
  }

]

function Items(props) {
  return (
    <div className={`${styles.Items}`}>
      <div >
        <Image className={`${styles.Image}`} width={100} height={100} src={props.item.image} />
      </div>


      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>

    </div>
  )
}

export default function Home() {

  return (
    <>
      <div className={styles.Principal}>
        <div className={styles.Head}>
          <NavBar />
        </div>
        <SonyContainer className={styles.Body}>
          <SonyCarousel interval={5000}>

            {item.map((item, i) => {
              return (
                <div key={i}>
                  <Items item={item} />

                </div>
              )
            })}
          </SonyCarousel>
        </SonyContainer>
      </div>

      <div style={{ backgroundColor: 'black' }}>
        <SonyContainer style={{ paddingTop: '50px' }}>
          <div className={styles.About}>
            <div className={styles.Avatar}>
              <Image src={'/images/home/avatar.png'} className={`${styles.Image}`} width={150} height={150} />
            </div>
            <div>
              <div className={styles.Items}>

                <h2>Sobre mim</h2>
                <p>Meu nome é Erikson e sou Formado em <b> Técnico de Informatica</b> integrado ao Ensino Médio.
                  Atualmente faço o curso superior em <b>Engenharia de Controle e Automação</b> na <b>Universidade Federal de Minas Gerais</b>.
                  Meu hobby é utilizar a programação para resolver problemas de Engenharia e assim unir as
                  duas melhores áreas do mundo: Matemática e Tecnologia da Informação. No momento presente, atuo como <b>Auxiliar de Sistemas e Ciência de Dados</b> na
                  empresa BRASS DO BRASIL PROJETOS E CONSULTORIA TECNICA LTDA. </p>
              </div>
            </div>
          </div>
        </SonyContainer>

        <SonyContainer style={{ paddingTop: '50px' }}>
          <div className={styles.Portfolio}>

            <div>

              <h2>Portfólio</h2>
              <h4>Desenvolvimento Web</h4>
              <div className={styles.Items}>
                {dataInformation.map((data, i) => {
                  if (data.type === 1) {
                    return (
                      <div style={{ margin: '20px' }} key={i}>
                        <CardsPortfolio props={data} />
                      </div>
                    )
                  }
                })}
              </div>


              <h4>Desenvolvimento Desktop</h4>

              <div className={styles.Items}>
                {dataInformation.map((data, i) => {
                  if (data.type === 2) {
                    return (
                      <div style={{ margin: '20px' }} key={i}>
                        <CardsPortfolio props={data} />
                      </div>
                    )
                  }
                })}
              </div>
              <h4>Data Science</h4>

              <div className={styles.Items}>
                {dataInformation.map((data, i) => {
                  if (data.type === 3) {
                    return (
                      <div style={{ margin: '20px' }} key={i}>
                        <CardsPortfolio props={data} />
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>

        </SonyContainer>

        <br />
      </div>
    </>

  )
}

const dataInformation = [
  {
    title: 'CommonVoice',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  }, {
    title: 'oil-company',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 2
  }, {
    title: 'PCA',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  }
  , {
    title: 'KDE',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'gaussianMixture',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'Clustering',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'Bayes',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'LSSVM',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'SVM',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'KNN',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'SVM',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'Automatic-vault',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 2
  },
  {
    title: 'Traveling-Salesman',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 3
  },
  {
    title: 'MatrixMips',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 2
  },
  {
    title: 'aws-client',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 1
  },
  {
    title: 'aws-server',
    description: 'Minha descrição',
    image: 'images/portfolio/img.png',
    type: 1
  },

]

