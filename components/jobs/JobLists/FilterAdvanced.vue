<template>
  <div class="col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="sidebar-shadow none-shadow mb-30">
      <div class="sidebar-filters">
        <div class="filter-block head-border mb-30">
          <h5>Advance Filter <a class="link-reset" href="#">Reset</a></h5>
        </div>
        <div class="filter-block mb-20">
          <div class="form-group select-style">
            <select class="form-control form-icons select-active">
              <option>New York, US</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
            </select>
          </div>
        </div>
        <div class="filter-block mb-30">
          <div class="form-group select-style">
            <select class="form-control form-icons select-active">
              <option>Industry</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
            </select>
            <button
              class="submit btn btn-default mt-10 rounded-1 w-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div class="filter-block mb-20">
          <h5 class="medium-heading mb-15">Industry</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >All</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">180</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Software</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">12</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Finance</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">23</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Recruting</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">43</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Management</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">65</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Advertising</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">76</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-20">
          <h5 class="medium-heading mb-25">Salary Range</h5>
          <div class="list-checkbox pb-20">
            <div class="row position-relative mt-10 mb-20">
              <div class="col-sm-12 box-slider-range">
                <div id="slider-range"></div>
              </div>
              <div class="box-input-money">
                <input
                  class="input-disabled form-control min-value-money"
                  type="text"
                  name="min-value-money"
                  disabled="disabled"
                  value=""
                />
                <input
                  class="form-control min-value"
                  type="hidden"
                  name="min-value"
                  value=""
                />
              </div>
            </div>
            <div class="box-number-money">
              <div class="row mt-30">
                <div class="col-sm-6 col-6">
                  <span class="font-sm color-brand-1">$0</span>
                </div>
                <div class="col-sm-6 col-6 text-end">
                  <span class="font-sm color-brand-1">$500</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group mb-20">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >All</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">145</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$0k - $20k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">56</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$20k - $40k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">37</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$40k - $60k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">75</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$60k - $80k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">98</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$80k - $100k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">14</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >$100k - $200k</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">25</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-30">
          <h5 class="medium-heading mb-10">Popular Keyword</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >Software</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">24</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Developer</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">45</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small">Web</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">57</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-30">
          <h5 class="medium-heading mb-10">Position</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small">Senior</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">12</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >Junior</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">35</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Fresher</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">56</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-30">
          <h5 class="medium-heading mb-10">Experience Level</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Internship</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">56</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Entry Level</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">87</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >Associate</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">24</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Mid Level</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">45</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Director</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">76</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Executive</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">89</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-30">
          <h5 class="medium-heading mb-10">Onsite/Remote</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >On-site</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">12</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >Remote</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">65</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small">Hybrid</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">58</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-30">
          <h5 class="medium-heading mb-10">Job Posted</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >All</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">78</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small">1 day</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">65</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small">7 days</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">24</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >30 days</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">56</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="filter-block mb-20">
          <h5 class="medium-heading mb-15">Job type</h5>
          <div class="form-group">
            <ul class="list-checkbox">
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Full Time</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">25</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" checked="checked" /><span
                    class="text-small"
                    >Part Time</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">64</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Remote Jobs</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">78</span>
              </li>
              <li>
                <label class="cb-container">
                  <input type="checkbox" /><span class="text-small"
                    >Freelancer</span
                  ><span class="checkmark"></span> </label
                ><span class="number-item">97</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
