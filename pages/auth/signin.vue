<template>
  <section class="pt-120 login-register">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 mx-auto">
          <div class="login-register-cover">
            <div class="text-center">
              <h2 class="mb-5 text-brand-1">Login</h2>
              <p class="font-sm text-muted mb-30">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <form class="login-register mt-4" action="#">
              <!-- Username -->
              <div class="mb-3">
                <label for="username" class="form-label fw-semibold"
                  >Username <span class="text-danger">*</span></label
                >
                <input
                  id="username"
                  name="username"
                  type="text"
                  class="form-control rounded-lg"
                  placeholder="stevenjob"
                  required
                />
              </div>

              <!-- Password -->
              <div class="mb-3">
                <label for="password" class="form-label fw-semibold"
                  >Password <span class="text-danger">*</span></label
                >
                <input
                  id="password"
                  name="password"
                  type="password"
                  class="form-control rounded-lg"
                  placeholder="************"
                  required
                />
              </div>

              <!-- Login Button -->
              <div class="form-group">
                <button
                  class="btn btn-default hover-up w-100"
                  type="submit"
                  name="login"
                >
                  Login
                </button>
              </div>

              <!-- Extra Links -->
              <div class="d-flex justify-content-between mt-3 small text-muted">
                <div>
                  Don't have an account?
                  <NuxtLink
                    to="/auth/register"
                    class="text-brand-1 fw-medium hover-underline"
                  >
                    Register
                  </NuxtLink>
                </div>
                <div>
                  Forgot password?
                  <NuxtLink
                    to="/auth/forgot-password"
                    class="text-brand-1 fw-medium hover-underline"
                  >
                    Click here
                  </NuxtLink>
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
  title: "Sign In",
  breadcrumb: "Authenticate",
});
</script>
