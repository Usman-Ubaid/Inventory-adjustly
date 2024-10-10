<script>
  import "../app.css";
</script>

<nav class="navbar bg-body-tertiary px-5">
  <div class="container-fluid">
    <a class="navbar-brand fs-3" href="/">Inventory Adjustly</a>
    <div class="d-flex column-gap-4">
      <a
        class="fs-4 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        href="/signin">Signin</a
      >
      <a
        class="fs-4 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        href="/signup">Signup</a
      >
    </div>
  </div>
</nav>

<slot></slot>
