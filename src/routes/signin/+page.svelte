<script>
  import { Button, Form, Input, FormGroup } from "@sveltestrap/sveltestrap";
  import { browser } from "$app/environment";

  export let form;
  let successMessage = "";
  let errorMessage = "";

  if (browser && form?.success) {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (
        form.user.phone === user.phone &&
        form.user.password === user.password
      ) {
        successMessage = "Successfully signed in ";
      } else {
        errorMessage = "Incorrect inputs";
      }
    }
  }
</script>

<div
  class="d-flex flex-column justify-content-center align-items-center w-100 h-75"
>
  <h1 class="text-center mb-5">Sign In</h1>
  {#if successMessage}
    <p class="text-primary">{successMessage}</p>
  {/if}

  {#if errorMessage}
    <p class="text-danger">{errorMessage}</p>
  {/if}

  <Form
    class="w-50 d-flex flex-column justify-content-center align-items-center"
    method="POST"
    action="/signin"
  >
    <FormGroup class="w-50" floating label="Phone Number">
      <Input required type="tel" name="phone" />
    </FormGroup>

    <FormGroup class="w-50" floating label="Password">
      <Input required type="password" name="password" />
    </FormGroup>
    <Button class="w-50 p-2 mt-3 fs-4" color="primary">Signin</Button>
  </Form>
</div>
