import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})

export class InfoService{
    personalInfo = {
        firstName: 'Vitalii',
        lastName: 'Marchenko',
        birthDate: '28.09.1995',
        skype: 'vetalb7',
        email:'topEverest@i.ua',
        address: '32 Prazhskaya street, Kyiv, 02090, Kyiv region, Ukraine',
        languages: ['Ukrainian', 'Russian', 'English'],
        workExperience: [
            {company: 'Small bussieness', position: 'Seller'},
            {company: 'Nova Poshta', position: 'Valet parker'},
            {company: "McDonald's", position: 'Restaurant team member'},
            {company: "Cryptocurrency", position: 'Crypto-trader'}
        ],
        education: 'Kyiv National University of Technologies and Design. Bachelour degree, Program Subject Area "Computer science"',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular 8', 'Bootstrap 4', 'Sass', 'Less', 'Git, GitHub - learning', 'Integration testing - learning', 'Unit testing - learning']
    };

    courses=[
        {title: 'HTML5 & CSS3 for Beginners', description: 'This course covers the fundamentals of HTML5 layout and the basics of CSS3', image: 'http://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png', lessons: ['Introduction to HTML5', 'Working with images, tables and lists','Cascading Style Sheets. Part 1', 'Cascading Style Sheets. Part 2', 'Element positioning', 'Semantic tags in HTML5', 'Forms and meta tags', 'Page Template. Practice'], url:'html5css3starter'},
        {title: 'JavaScript Essential', description: 'During this course students will get acquainted with the syntax and main features of JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png', lessons: ['Introduction to JavaScript', 'Logical operators', 'Arrays', 'Functions', 'Objects', 'Practice. Part 1', 'Practice. Part 2'], url:'jsEssential'},
        {title: 'JavaScript Advanced', description: 'The course builds on the concepts learned during JavaScript Essential and introduces advanced features of JavaScript', image: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119', lessons: ['Constructors and prototypes', 'Working with document', 'Window object. Regular expressions', 'JavaScript & CSS', 'Events and event handling. Part 1', 'Events and event handling. Part 2', 'Forms and form elements', 'Cookies and storing data', 'Working with graphics on the client side', 'AJAX and HTTP'], url: 'jsAdvanced'},
        {title: 'Bootstrap 4', description: 'The course covers the use of Bootstrap 4 instruments for faster and easier web development', image: 'http://html-plus.in.ua/wp-content/uploads/2018/01/bootstrap4-start.jpg', lessons: ['Bootstrap 4. Typography', 'Bootstrap 4.Components', 'Bootstrap 4. JavaScript', 'Bootstrap 4. Utilities for layout'], url:'bootstrap4'},
        {title: 'HTML5 & CSS3 Advanced', description: 'This course further explores the functionality of HTML5 in combination with JavaScript. The students will be introduced to the concepts of FlexBox, Grid System, Canvas as well as geolocation, and built-in audio/video', image: 'https://www.academyclass.com/wp-content/uploads/2016/05/HTML-CSS-05.png', lessons: ['Microdata. Geolocation', 'Canvas', 'Web Storage. Audio & Video', 'Flex & Grid layout', 'Transformations. Animation', 'SASS basics', 'Practice'], url:'html5css3Advanced'},
        {title: 'TypeScript Fundamentals', description: 'During this course the students get acquainted with the syntax and constructions used in TypeScript', image: 'https://cdn-images-1.medium.com/max/1200/1*mn6bOs7s6Qbao15PMNRyOA.png', lessons: ['Introduction. Functions and variables', 'Classes and interfaces', 'Generics', 'Modules and namespaces', 'Practice'], url: 'ts'},
        {title: 'Angular Essential', description: 'The course covers the basic use of Angular for developing SPAs', image: 'https://christianliebel.com/wp-content/uploads/2016/02/Angular2-825x510.png', lessons: ['Introduction', 'Components', 'Directives and data binding', 'Services. Dependency Injection', 'Routing', 'Forms', 'HTTP', 'Practice. Part 1', 'Practice. Part 2'], url:'angular'}
    ];

    getCourses(){
        return this.courses;
    }

    getInfo(){
        return this.personalInfo;
    }

    getCourse(url: string){
        return this.courses.find(el => el.url == url);
    }
}
