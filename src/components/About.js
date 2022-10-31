import React , {useState} from 'react'

export default function About() {
	
	const [myStyle, setMyStyle] = useState
	(
		{
			color : 'black' ,
			backgroundColor: 'white'
		}
	)

	const [btnText, setBtnText] = useState("Enable Light Mode") 

	const toggleStyle=()=>
	{
		if(myStyle.color === 'white')
		{
			setMyStyle
			(
				{
					color : 'black' ,
					backgroundColor : 'white' ,
					border : '1px solid white' 
				}
			)

			setBtnText("Enable Dark Mode")
		}

		else
		{
			setMyStyle
			(
				{
					color : 'white',
					backgroundColor : 'black' 
				}
			)

			setBtnText("Enable Light Mode")
		}
	}
	

	return (
	<>	
		<div classNameName="container" style={myStyle}>
			
			<h2 className="my-3 mx -3">About Us</h2>

			<div className="accordion" id="accordionExample">
			  

				<div className="accordion-item" style={myStyle}>

					<h2 className="accordion-header" id="headingOne">
					  <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					    Accordion Item #1
					  </button>
					</h2>

					<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					  
						<div className="accordion-body">
							<strong>TextUtils : </strong>TextUtils is a machine learning technique used to automatically extract valuable insights from unstructured text data. Companies use text analysis tools to quickly digest online data and documents, and transform them into actionable insights.
						</div>

					</div>

				</div>


				<div className="accordion-item" style={myStyle}>

					<h2 className="accordion-header" id="headingTwo">
					  <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					    Accordion Item #2
					  </button>
					</h2>

					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					  <div className="accordion-body">
					    <strong>Why Is TextUtils Important? : </strong>Text analysis tools allow businesses to structure vast quantities of information, like emails, chats, social media, support tickets, documents, and so on, in seconds rather than days, so you can redirect extra resources to more important business tasks.
					  </div>
					</div>


				</div>


				<div className="accordion-item" style={myStyle} >

					<h2 className="accordion-header" id="headingThree">
					  <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					    Accordion Item #3
					  </button>
					</h2>

					<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					  <div className="accordion-body">
					    <strong>Analyze Text in Real-time : </strong>Businesses are inundated with information and customer comments can appear anywhere on the web these days, but it can be difficult to keep an eye on it all. Text analysis is a game-changer when it comes to detecting urgent matters, wherever they may appear, 24/7 and in real time. By training text analysis models to detect expressions and sentiments that imply negativity or urgency, businesses can automatically flag tweets, reviews, videos, tickets, and the like, and take action sooner rather than later.


					  </div>
					</div>

				</div>

			</div>

			<div className="contianer my-3"> 
			
				<button type="button" className="btn btn-dark mx-3 my-3" onClick = {toggleStyle}  >{btnText}</button>

			</div>

		</div>

	</>
	)
}