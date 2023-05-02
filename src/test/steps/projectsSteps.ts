import { Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../hooks/fixture";
import ProjectsPage from "../pages/projectsPage";

// setDefaultTimeout(60 * 1000 * 2);

Then('user is redirected to the Project List page', async function () {
  const projectsPage = new ProjectsPage(fixture.page);
  projectsPage.checkLogo();
});

Then('the user logs out', async function () {
  const projectsPage = new ProjectsPage(fixture.page);
  projectsPage.logoutUser();
});