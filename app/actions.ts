"use server";

export async function submitForm( formData: FormData) {

    try {
        console.log(formData);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        console.log(response);

        const data = await response.json();
        console.log("sent");
        

    } catch (e) {
        throw new Error('Failed to create task')
    }

}