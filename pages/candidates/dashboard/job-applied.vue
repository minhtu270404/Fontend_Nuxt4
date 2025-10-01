<template>
  <section class="section-box mt-120">
    <div class="container">
      <div class="row">
        <MenuCandidates />

        <div class="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
          <div class="content-single">
            <h3 class="mt-0 color-brand-1 mb-30">My Jobs</h3>
            <div class="row display-list">
              <div class="col-lg-6 col-sm-12">
                <div class="card-grid-2 hover-up">
                  <div class="card-grid-2-image-left">
                    <span class="flash"></span>
                    <div class="image-box">
                      <img
                        src="/assets/imgs/brands/brand-4.png"
                        alt="joblist"
                      />
                    </div>
                    <div class="right-info">
                      <a class="name-job" href="">Dailymotion</a
                      ><span class="location-small">New York, US</span>
                    </div>
                  </div>
                  <div class="card-block-info">
                    <h6><a href="">Frontend Developer</a></h6>
                    <div class="mt-5">
                      <span class="card-briefcase">Full time</span
                      ><span class="card-time">6<span> minutes ago</span></span>
                    </div>
                    <p class="font-sm color-text-paragraph mt-15">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae architecto eveniet, dolor quo repellendus
                      pariatur.
                    </p>
                    <div class="mt-30">
                      <a class="btn btn-grey-small mr-5" href="">Typescript</a
                      ><a class="btn btn-grey-small mr-5" href="">Java</a>
                    </div>
                    <div class="card-2-bottom mt-30">
                      <div class="row">
                        <div class="col-lg-7 col-7">
                          <span class="card-text-price">$250</span
                          ><span class="text-muted">/Hour</span>
                        </div>
                        <div class="col-lg-5 col-5 text-end">
                          <div
                            class="btn btn-apply-now"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalApplyJobForm"
                          >
                            Apply now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paginations">
              <ul class="pager">
                <li>
                  <a class="pager-prev" href="#"
                    ><i class="fas fa-arrow-left"></i
                  ></a>
                </li>
                <li><a class="pager-number" href="#">1</a></li>
                <li><a class="pager-number" href="#">2</a></li>
                <li><a class="pager-number active" href="#">3</a></li>
                <li><a class="pager-number" href="#">4</a></li>
                <li>
                  <a class="pager-next" href="#"
                    ><i class="fas fa-arrow-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuCandidates from '~/components/Jobs/Grid/Candidates/dashboard/MenuCandidates.vue';

</script>
