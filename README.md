<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://imgur.com/Rn5fpWB.png" alt="Logo" width="400" height="80">
  </a>

<h3 align="center">Daily To Do List</h3>

  <p align="center">
    A enhanced To Do list that refresh completed tasks to pending tasks when another day starts
    <br />
    <a href="https://github.com/samuelcolares/dailyTodo/pulls"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dailytodo-sam.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/samuelcolares/dailyTodo/issues">Report Bug</a>
    ·
    <a href="https://github.com/samuelcolares/dailyTodo/pulls">Request Feature</a>
  </p>
</div>


<!--
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Daily TODO Screen Shot][product-screenshot]](https://dailytodo-sam.vercel.app/)


Adult life is all about an everyday pile full of daily tasks to be completed. Sometimes, I forget one or another, so I made this little project to check if I don't forget anything important and also to enhance my knowledge of _Redux_.

This project uses localStorage (HTML Web Storage built-in API) so you can close the application whenever you feel like it, and when reopened, all the tasks will be there.

Every day at 00:00 of your local time, all tasks completed the day before will be unmarked as pending tasks.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

![Static Badge](https://img.shields.io/badge/CORE-8A2BE2)
* Next.JS
* React-Redux and Redux-Toolkit
* localStorage

![Static Badge](https://img.shields.io/badge/STYLING-2f7e74)
* Shadcn/ui
* TailwindCSS
* Lucide

![Static Badge](https://img.shields.io/badge/FORM%20AND%20VALIDATION-4171d9)
* React-Hook-Form
* Zod

![Static Badge](https://img.shields.io/badge/FORMATTING%20DATA-ee4648)
* Tanstack/tables

![Static Badge](https://img.shields.io/badge/TIME%20TRACKING-1d1d1d)
* React-live-clock
* Luxon

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

you can use the website link [Daily To Do](https://dailytodo-sam.vercel.app/) or you can update this project to your own version

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/samuelcolares/dailyTodo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start local with
   ```sh
   npm run dev
   ```

This is an example of how to install locally using NPM, but of course you can use, **PNPM**, **YARN**, **BUN**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### 1. Creating a Task and defining priority level

[![Submitting Task Screenshot][usage-1]](https://dailytodo-sam.vercel.app/)
Task name must be minimum of 5 characters.

### 2. Filtering
#### 2.1 By task name
[![Submitting Task Screenshot][usage-2]](https://dailytodo-sam.vercel.app/)
#### 2.2 By priority
[![Submitting Task Screenshot][usage-3]](https://dailytodo-sam.vercel.app/)
*_You can also double filter by using filter by task and filter by priority_
#### 2.3 Quick Sort
[![Submitting Task Screenshot][usage-4]](https://dailytodo-sam.vercel.app/)
[![Submitting Task Screenshot][usage-5]](https://dailytodo-sam.vercel.app/)

### 3. Check all or Uncheck all
[![Submitting Task Screenshot][usage-6]](https://dailytodo-sam.vercel.app/)
[![Submitting Task Screenshot][usage-7]](https://dailytodo-sam.vercel.app/)

### 4. Update Task
By the actions cell column, you can change the task name or/and priority level

[![Submitting Task Screenshot][usage-8]](https://dailytodo-sam.vercel.app/)

### 5. Delete Task
#### 5.1 Delete single task
By the actions cell column, you can delete the selected task

[![Submitting Task Screenshot][usage-9]](https://dailytodo-sam.vercel.app/)
#### 5.2 Delete all tasks
[![Submitting Task Screenshot][usage-10]](https://dailytodo-sam.vercel.app/)
[![Submitting Task Screenshot][usage-11]](https://dailytodo-sam.vercel.app/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ X ] Store management (CRUD) using redux-toolkit
- [ X ] Syncing redux store with localStorage
- [ X ] Reset tasks at midnight
- [ X ] Filter options
- [ ]  future updates ??? choosing task to refresh monthly/weekly/daily

<!-- See the [open issues](https://github.com/samuelcolares/dailyTodo/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Samuel Colares - [LinkedIn][linkedin-url] - samuelcolaresdequino@gmail.com

Project Link: [Daily To Do](https://dailytodo-sam.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/samuelcolares/dailyTodo.svg?style=for-the-badge
[contributors-url]: https://github.com/samuelcolares/dailyTodo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/samuelcolares/dailyTodo.svg?style=for-the-badge
[forks-url]: https://github.com/samuelcolares/dailyTodo/network/members
[stars-shield]: https://img.shields.io/github/stars/samuelcolares/dailyTodo.svg?style=for-the-badge
[stars-url]: https://github.com/samuelcolares/dailyTodo/stargazers
[issues-shield]: https://img.shields.io/github/issues/samuelcolares/dailyTodo.svg?style=for-the-badge
[issues-url]: https://github.com/samuelcolares/dailyTodo/issues
[license-shield]: https://img.shields.io/github/license/samuelcolares/dailyTodo.svg?style=for-the-badge
[license-url]: https://github.com/samuelcolares/dailyTodo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/samuelcolares
[product-screenshot]: https://imgur.com/8ZUPU7I.png
[usage-1]: https://imgur.com/JhgNGQX.png
[usage-2]: https://imgur.com/CEIyZj8.png
[usage-3]: https://imgur.com/jKzRTcS.png
[usage-4]: https://imgur.com/YaP9UA9.png
[usage-5]: https://imgur.com/Pr2229h.png
[usage-6]: https://imgur.com/HhcesNN.png
[usage-7]: https://imgur.com/3kDLpDC.png
[usage-8]: https://imgur.com/gvQesKp.png
[usage-9]: https://imgur.com/lM0EEtG.png
[usage-10]: https://imgur.com/GiuxSiC.png
[usage-11]: https://imgur.com/FeZX7h4.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

