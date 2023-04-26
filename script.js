const testimonialsContainer = document.querySelector('.testimonals-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonals = [
    {
        name: 'John Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/men/47.jpg',
        text: "One of John's greatest strengths is his ability to communicate technical concepts clearly and concisely, which has been invaluable in helping our team understand and implement new technologies. His contributions have been instrumental in the success of several critical projects, and his expertise has been instrumental in helping us stay ahead of the curve in an ever-evolving industry.",
    },
    {
        name: 'Mike Jones',
        position: 'Sales',
        photo: 'https://randomuser.me/api/portraits/men/42.jpg',
        text: "One of Mike's greatest strengths is his ability to think outside the box and come up with creative solutions to complex technical challenges. His contributions have been instrumental in the success of several high-profile projects, and his expertise has been invaluable in helping our team stay ahead of the curve in an ever-changing technological landscape.",
    },
    {
        name: 'Ryan Isles',
        position: 'Ops',
        photo: 'https://randomuser.me/api/portraits/men/26.jpg',
        text: "His expertise has been instrumental in the success of numerous critical projects, and his ability to quickly and accurately diagnose and resolve technical issues has been invaluable to our team. Additionally, Ryan's strong communication skills and natural leadership abilities have helped to inspire and motivate his colleagues to achieve their best work.",
    },
    {
        name: 'Tim Ryan',
        position: 'IT',
        photo: 'https://randomuser.me/api/portraits/men/50.jpg',
        text: "His contributions have been instrumental in the success of several important projects, and his expertise has been invaluable in helping our team navigate and implement new technologies. Additionally, Tim is a strong communicator and a natural leader, with a talent for inspiring and motivating his colleagues to achieve their best work.",
    },
]

let idx = 1

function updateTestimonial() { 
    const { name, position, photo, text } = testimonals[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML =  name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)