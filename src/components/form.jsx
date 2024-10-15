import { useForm } from "react-hook-form";

//NOTE: can use "zod" and "zodResolvers" in order to improve the validation

const Form = () => { 

    const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
        //add default values to the inputs - this obj is optional
        defaultValues: {
            email: "default@email.com"
        }
    });
    
    const _onSubmit = async(data) => {
        //simulate api call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(data);
    }

    return (
        <form className="" onSubmit={handleSubmit(_onSubmit)}>
            <input {...register("email", {
                required: "Email is Required", //true
                validate: (value) => {
                    //custom validation function
                    if(!value.includes('@')){
                        return "Email Must Contain @"
                    }
                    return true;
                } 
            })} type="text" name="email" placeholder="Email"/>
            {errors.email && (<div>{errors.email.message}</div>)}
            <input {...register("password", {
                required: true,
                minLength: 8
            })}type="password" name="password" placeholder="Password" />
            {errors.password && (<div>{errors.password.message}</div>)}
            
            <button disabled={isSubmitting} type='submit'>
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    )


} 

export default Form;
