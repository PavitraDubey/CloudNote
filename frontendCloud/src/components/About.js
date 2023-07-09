import React from 'react'

const About = () => { 
    return (
        <div className='container' style={{"backgroundColor":"lightgrey","width":"100vw","border-radius":"20px","padding":"20px"}}>
            <div className='img' style={{"width":"100%"}}>
                <img style={{"width":"100%","height":"350px","border-radius":"7px"}} src="https://media.istockphoto.com/id/479184640/photo/sunny-sky-background.webp?b=1&s=170667a&w=0&k=20&c=-9ieD2XZxvrI50FhJEyAJ2NoX7ky66NGVNMsWoqKx_Q=" alt="Responsive image"/>
            </div>
            <br/>
            <br/>
            <div className='text'>
                <h1 className='display-1'>About Us</h1>
                <br/>
                <p className='display-6'>CloudNote is a cutting-edge note-taking application that allows you to store your notes securely on the cloud. It offers a simple and intuitive interface, ensuring a seamless note-taking experience. With CloudNote, you can access your notes anytime, anywhere, and from any device, making it convenient for both personal and professional use.</p>

<p className='display-6'>By utilizing cloud storage, CloudNote eliminates the risk of losing your notes and provides a reliable backup solution. You no longer need to worry about misplaced papers or syncing difficulties between devices. Your notes are always just a few clicks away.</p>

<p className='display-6'>CloudNote's powerful organizational features enable you to categorize and tag your notes, making it easy to find the information you need quickly. You can create separate notebooks or categories for different subjects, projects, or personal preferences. The search function allows you to locate specific notes effortlessly, even if you have a large collection.</p>

<p className='display-6'>Collaboration is made simple with CloudNote. You can share your notes with colleagues, classmates, or friends, allowing for efficient teamwork and idea sharing. Track changes in real-time and work together seamlessly, enhancing productivity and collaboration.</p>

<p className='display-6'>The security and privacy of your data are of utmost importance to us. CloudNote utilizes advanced encryption techniques to ensure that your notes are always protected. Your information remains confidential, giving you peace of mind while using our application.</p>

<p className='display-6'>Join the CloudNote community today and revolutionize the way you store and access your notes. Experience the convenience, security, and organizational power of CloudNote and unleash your productivity potential.</p>
            </div>
        </div>
    )
}

export default About
