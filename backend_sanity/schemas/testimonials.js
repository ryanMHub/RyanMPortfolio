export default {
    //used to store testimonials from references and customers
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            //The individuals personal name
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            //the name of the company the individual works for
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            //stores their image
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            //quote or feedback they left
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ],
}