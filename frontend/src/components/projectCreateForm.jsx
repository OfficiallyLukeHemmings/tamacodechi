function ProjectCreateForm() {
  
  async function handleClick() {
    const title = document.getElementById("form-title").value;
    const desc = document.getElementById("desc-input").value;
    const link = document.getElementById("form-link").value;
    const complete = document.getElementById("checkbox-input").checked;
    
    fetch("http://localhost:5000/projects/new", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        link: link,
        complete: complete,
      }),
    })
      .then(window.location.replace("http:localhost:5173/projects/" + title))
      .catch(error => console.error(error));
  }

  return ( 
    <>
      <form id="project-create-form">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="form-title" maxLength={50} />
        <br />
        <label htmlFor="desc">Description: </label>
        <textarea name="desc" id="desc-input" />
        <br />
        <label htmlFor="link">Link:</label>
        <input type="text" name="link" id="form-link"/>
        <br />
        <label htmlFor="complete">Complete?</label>
        <input type="checkbox" name="complete" id="checkbox-input"/>
      </form>
      <button type="submit" className="submit-button" onClick={handleClick}>Add New Project</button>
    </>
  );
}

export default ProjectCreateForm;