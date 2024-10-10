<script lang="ts">
  import { browser } from "$app/environment";
  import { Button, Form, Input, FormGroup } from "@sveltestrap/sveltestrap";

  export let form;

  if (browser && form?.success) {
    localStorage.setItem("user", JSON.stringify(form.user));
  }

  let username = "";
  let phone = "";
  let password = "";
</script>

<div class="d-flex flex-column justify-content-center align-items-center h-75">
  <h1 class="text-center mb-5">Create an account</h1>

  {#if form?.success}
    <p class="text-primary">Signup was successfull</p>
  {/if}

  <Form
    class="w-50 d-flex flex-column justify-content-center align-items-center"
    method="POST"
    action="/signup"
  >
    <FormGroup class="w-50" floating label="Username">
      <Input required type="text" name="username" bind:value={username} />
    </FormGroup>

    <FormGroup class="w-50" floating label="Phone Number">
      <Input required type="tel" name="phone" bind:value={phone} />
    </FormGroup>

    <FormGroup class="w-50" floating label="Password">
      <Input required type="password" name="password" bind:value={password} />
    </FormGroup>
    <Button type="submit" class="w-50 p-2 mt-3 fs-4" color="primary"
      >Signup</Button
    >
  </Form>
</div>
