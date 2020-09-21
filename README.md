# dephion_code_challange

- i choosed to use a MERN stack
- all services are containrized and if you use docker its gonna be really easy to setup and start the project
- i creates a simply Restfull api for backend, and definitly it could be scaled as a GraphQL service, who knows, maybe next steps :)
- i used joi in backend to validate data that comes and then parse it
- login would give you a token that wxpires in 30d, i could implement refresh token flow to be able to get fresh token for user but for sake of simplicity i used 30d limit on expiration
- i did not created DTO models for my domain in backend, just to handle the backend side as quick as possible

# steps

- .env files

- i could have other branches to manage stuff but i tried to take it simple

# client

i choosed create react app as a simplest and quickest way to implement the front end react boilerplate, i should notice that im really good with bundler like webpack , but for the sake of simplecity and being quick as possible on boilerplate, i rather to choose a boilerplate like CRA instead of writing it from scratch

- used immer for have a better performance on updating the store
- used formik for simplifying the procces of form managment
- used Yup for validation that mixes well with formik
- used redux persist for persisting the global user data in client side
