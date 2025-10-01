<template>
  <section class="pt-120 login-register">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mx-auto">
          <div class="login-register-cover">
            <div class="text-center">
              <h2 class="mb-5 text-brand-1">Register</h2>
              <p class="font-sm text-muted mb-30">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <form class="login-register text-start mt-20" action="#">
              <div class="row">
                <div class="col-xl-6">
                  <div class="form-group">
                    <label class="form-label" for="input-1">Full Name *</label>
                    <input
                      class="form-control"
                      id="input-1"
                      type="text"
                      required=""
                      name="fullname"
                      placeholder="Steven Job"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-group">
                    <label class="form-label" for="input-2">Email *</label>
                    <input
                      class="form-control"
                      id="input-2"
                      type="email"
                      required=""
                      name="emailaddress"
                      placeholder="stevenjob@gmail.com"
                    />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="form-group">
                    <label class="form-label" for="input-3">Username *</label>
                    <input
                      class="form-control"
                      id="input-3"
                      type="text"
                      required=""
                      name="username"
                      placeholder="stevenjob"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-group">
                    <label class="form-label" for="input-4">Password *</label>
                    <input
                      class="form-control"
                      id="input-4"
                      type="password"
                      required=""
                      name="password"
                      placeholder="************"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-group">
                    <label class="form-label" for="input-5"
                      >Re-Password *</label
                    >
                    <input
                      class="form-control"
                      id="input-5"
                      type="password"
                      required=""
                      name="re-password"
                      placeholder="************"
                    />
                  </div>
                </div>

                <div class="col-12 mb-3">
                  <hr />
                  <h6 for="" class="mb-2">Create Account For</h6>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="type"
                      id="typeCandidate"
                      value="candidate"
                      checked
                    />
                    <label class="form-check-label" for="typeCandidate"
                      >Candidate</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="type"
                      id="typeCompany"
                      value="company"
                    />
                    <label class="form-check-label" for="typeCompany"
                      >Company</label
                    >
                  </div>
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-default hover-up w-100"
                    type="submit"
                    name="login"
                  >
                    Submit &amp; Register
                  </button>
                </div>
                <div class="text-muted text-center">
                  Already have an account?
                  <NuxtLink to="signin">Sign in</NuxtLink>
                </div>
              </div>
            </form>
            <div class="text-center mt-20">
              <div class="divider-text-center">
                <span>Or continue with</span>
              </div>
              <button class="btn social-login hover-up mt-20">
                <img
                  src="/assets/imgs/template/icons/icon-google.svg"
                  alt="joblist"
                /><strong>Sign up with Google</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  title: "Sign Up",
  breadcrumb: "Authenticate",
});
</script>
