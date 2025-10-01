<template>
  <section class="pt-120 login-register">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 mx-auto">
          <div class="login-register-cover">
            <div class="text-center">
              <h2 class="mt-10 mb-5 text-brand-1">Forgot Password!</h2>
              <p class="font-sm text-muted mb-30">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <form class="login-register text-start mt-20" action="#">
              <div class="form-group">
                <input
                  class="form-control"
                  id="input-1"
                  type="text"
                  required=""
                  name="emaill"
                  placeholder="stevenjob@gmail.com"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-default hover-up w-100"
                  type="submit"
                  name="continue"
                >
                  Continue
                </button>
              </div>
              <div class="text-muted text-center">
                Don't have an Account? <a href="signin">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  title: "Forget Password",
  breadcrumb: "Authenticate",
});
</script>
