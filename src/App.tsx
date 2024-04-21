// import { useState } from 'react'
import SchoolVirusBackground from '/SchoolVirus.png'
import SchoolVirusLogo from '/react.svg'
import './App.css'

function App() {
	return (
		<>
			<div className='navbar'>
				<div>
					<img src={SchoolVirusLogo} className="logo" alt="Logo School Virus" />
					<a href='#Informations'>Informations</a>
					<a href='#Avis'>Avis</a>
					<a href='#Propos'>A propos</a>
				</div>
				<button>Télécharger</button>
			</div>
			<div className='header'>
				<img src={SchoolVirusBackground} className="image" alt="Image School Virus" />
				<div className='title index-first'>
					<h1>School Virus</h1>
					<button>Jouer maintenant</button>
				</div>
				<div className='gradient absolute index-second'></div>
			</div>
			<div id='Informations' className='info'>
				<h2>Informations</h2>
				<div>
					<p>Bienvenue dans School Virus, un jeu d'action et de survie palpitant qui se déroule dans l'enceinte d'une classe d'école infestée de virus informatiques. Prenez le contrôle d'un étudiant équipé d'un ordinateur et affrontez les vagues incessantes de virus qui menacent de détruire le système informatique de l'école. Votre mission : survivre pendant 5 minutes en éliminant tous les virus qui apparaissent. Êtes-vous prêt à relever le défi ?</p>
					<img src={SchoolVirusLogo} className="icon" alt="Logo School Virus" />
				</div>
				<div>
					<p>Dans School Virus, vous êtes plongé au cœur de l'action dès le début. Armé de votre fidèle ordinateur, vous devez défendre la classe contre les attaques incessantes des virus. Utilisez vos compétences en informatique pour repérer et éliminer rapidement les menaces qui surgissent de tous les côtés. Chaque seconde compte, alors restez concentré et gardez un œil sur votre chrono. Le destin de l'école repose entre vos mains !</p>
					<img src={SchoolVirusLogo} className="icon" alt="Logo School Virus" />
				</div>
				<div>
					<p>Préparez-vous à affronter un défi stimulant dans School Virus. Le gameplay rapide et frénétique mettra vos réflexes à l'épreuve alors que vous jonglez entre la défense de votre ordinateur et l'attaque des virus. Collectez des power-ups pour renforcer vos capacités et débloquer de nouvelles armes pour repousser les hordes de virus. Avec des graphismes immersifs et une bande-son captivante, plongez-vous dans une expérience de jeu inoubliable où chaque victoire est une réussite et chaque défaite est une leçon.</p>
					<img src={SchoolVirusLogo} className="icon" alt="Logo School Virus" />
				</div>
				<div>
					<p>Découvrez un univers virtuel unique dans School Virus. Parcourez les différentes salles de l'école, des salles de classe aux laboratoires informatiques, et découvrez les secrets cachés de l'établissement. Interagissez avec d'autres personnages non jouables pour obtenir des conseils et des astuces, ou participez à des quêtes secondaires pour gagner des récompenses spéciales. Avec des graphismes détaillés et une ambiance immersive, plongez-vous dans l'atmosphère captivante de l'école virtuelle et préparez-vous à une aventure épique.</p>
					<img src={SchoolVirusLogo} className="icon" alt="Logo School Virus" />
				</div>
			</div>
			<div id="Avis" className='avis'>
				<h2>Avis</h2>
				<div className='note'>
					<div><p>ss</p></div>
					<div><p>sssssssssssssssssssssssssssssssssssssssssssss</p></div>
					<div><p>sss</p></div>
					<div><p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p></div>
				</div>
			</div>

			<div id="Propos" className='propos'>
				<h2>A propos</h2>

			</div>
		</>
	)
}

export default App
