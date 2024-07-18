function ProjectCreateForm() {
  return ( 
    <form id="project-create-form">
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" maxLength={50} />
      <br />
      <label htmlFor="desc">Description: </label>
      <input type="text" name="desc" id="desc-input" />
      <br />
      <label htmlFor="link">Link:</label>
      <input type="text" name="link" />
      <br />
      <label htmlFor="complete">Complete?</label>
      <input type="checkbox" name="complete" />
    </form>
  );
}

export default ProjectCreateForm;