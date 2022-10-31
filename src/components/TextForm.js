import React, {useState} from 'react'

export default function TextForm(props) {

	const upClick = () => 
	{
		// console.log("UpperCase was clicked!" + text) ;

		let newText = text.toUpperCase() ;

		setText(newText) ;

		props.showAlert("Converted to UpperCase!" , "success") ;
	} 

	const lowClick = () => 
	{
		// console.log("UpperCase was clicked!" + text) ;

		let newText = text.toLowerCase() ;

		setText(newText) ;

		props.showAlert("Converted to LowerCase!" , "success") ;
	}

	const clearClick = () => 
	{
		// console.log("UpperCase was clicked!" + text) ;

		let newText = '' ;

		setText(newText) ;

		props.showAlert("Text area cleared!" , "danger") ;
	}

	const handleOnChange = (event) => 
	{
		// console.log("On Change") ;

		setText(event.target.value) ;
	}

	const replaceString=()=>
	{
		let repval=prompt("Enter the word to be replaced:")
		let tobereplaced= new RegExp(repval,'g');

		let toreplace=prompt("Enter the text that you want to replace with:");

		let newText= text.replace(tobereplaced,toreplace);
		setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


	const [text, setText] = useState('Enter text here');

	return (

		<>
			<div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
				
				<h1> {props.heading} </h1>
				<div className="mb-3" >

					
					<textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="mybox" value = {text} onChange={handleOnChange} rows="10"> </textarea>
				
				</div>
				
				<button type="submit" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upClick}>Convert to UpperCase</button>
				<button type="submit" disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={lowClick}>Convert to LowerCase</button>
				<button type="submit" disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={clearClick}>Clear Text</button>
				<button type="submit" disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={replaceString}>Replace word</button>
				<button type="submit" disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
				<button type="submit" disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

			</div>

			<div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
			
				<h3>Your Text Summary</h3>
				<p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>

				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Nothing to preview!"}</p>
			</div>



		</>
	)
}