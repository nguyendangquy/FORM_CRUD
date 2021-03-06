import React from 'react'
import { Consumer } from '../../context';
export default function DetailContact(props) {
    return (
        <Consumer>
            {
                value => {
                    const {contacts} = value;
                    let newDatailContact = contacts.filter(el => el.id === +props.match.params.id);
                   
                    return (
                        newDatailContact.map(el =>(
                            <div>
                                <h1 className="d-flex justify-content-center text-danger">This is Page Detail</h1>
                                <h1>Author: {el.name}</h1>
                                <h5 className="display-5">About Contact You can get anything here ! with phonenumber 
                                        {el.phone}
                                </h5>
                                <p>Email: {el.email}</p>
                                <p className="d-flex p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, culpa ipsum doloribus, asperiores, exercitationem minus
                                    eligendi ea dicta voluptatibus dolorum soluta architecto ipsa illum provident iure eius deserunt eum. Officia!</p>
                                <img src="https://loremipsum.io/assets/images/lorem-ipsum-15th-century-typesetter.jpg" alt="grayPictures" style={{width:'50%',height:'350px'}}></img>
                                <p className = "d-flex p-2 justify-content-end">
                                    <span className="py-3 align-items-end d-flex w-50">
                                    It is a long established fact that a reader will be distracted by the readable content of a page 
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </span>
                                </p>
                                <img src="https://loremipsum.io/assets/images/lorem-ipsum-15th-century-typesetter.jpg" alt="grayPictures" style={{width:'50%',height:'350px'}}></img>
                            </div>
                        ))
                     
                    )
                }
            }
        </Consumer>
    )
}
//     return (
//         <div>
//             <h1>{props.match.params.id} params</h1>
//             <h1 className="display-4">About Contact You can get anything here</h1>
//             <p className="d-flex p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, culpa ipsum doloribus, asperiores, exercitationem minus
//                  eligendi ea dicta voluptatibus dolorum soluta architecto ipsa illum provident iure eius deserunt eum. Officia!</p>
//             <img src="https://loremipsum.io/assets/images/lorem-ipsum-15th-century-typesetter.jpg" alt="grayPictures" style={{width:'50%',height:'350px'}}></img>
//             <p className = "d-flex p-2 justify-content-end">
//                 <span className="py-3 align-items-end d-flex w-50">
//                 It is a long established fact that a reader will be distracted by the readable content of a page 
//             when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
//             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//                 </span>
//             </p>
//             <img src="https://loremipsum.io/assets/images/lorem-ipsum-15th-century-typesetter.jpg" alt="grayPictures" style={{width:'50%',height:'350px'}}></img>

        
//         </div>
//     )
// }
