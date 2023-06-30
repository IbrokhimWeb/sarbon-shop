<template>
    <div class="ps-breadcrumb">
        <div class="ps-container">
            <ul class="breadcrumb">
                <li>
                    <a :href="route('home')">Home</a>
                </li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    <div>
        <div style="height: 400px; width: 100%; position: relative; text-align: right;">
            <div style="height: 400px; width: 100%; overflow: hidden; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% !important;"><iframe src="https://maps.google.com/maps?q=502 New Street, Brighton VIC, Australia%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="500" frameborder="0"></iframe></div>
        </div>
        <div class="ps-contact-info">
            <div class="container">
                <div class="ps-section__header">
                    <h3>Contact Us For Any Questions</h3>
                </div>
                <div class="ps-section__content">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Contact Directly</h4>
                                <p><span class="d-block">contact@martfury.com</span><span>(+004) 912-3548-07</span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Headquarters</h4>
                                <p><span class="d-block">17 Queen St, Southbank, Melbourne 10560, Australia</span><span></span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Work With Us</h4>
                                <p><span class="d-block">Send your CV to our email:</span><span>career@martfury.com</span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Customer Service</h4>
                                <p><span class="d-block">customercare@martfury.com</span><span>(800) 843-2446</span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Media Relations</h4>
                                <p><span class="d-block">media@martfury.com</span><span>(801) 947-3564</span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="ps-block--contact-info">
                                <h4>Vendor Support</h4>
                                <p><span class="d-block">vendorsupport@martfury.com</span><span>(801) 947-3100</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-contact-form">
            <div class="container">
                <form action="/contact/send" method="post" class="ps-form--contact-us contact-form">
                    <input type="hidden" name="_token" value="kxmN2k7Azf3ToNnVN2Rd1ulUHwk5cjyi22nXK3np">
                    <h3>Get In Touch</h3>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div class="form-group"><input name="name" type="text" placeholder="Name *" class="form-control"></div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="form-group"><input type="email" name="email" placeholder="Email *" class="form-control"></div>
                        </div>
                        <div class="col-12 ">
                            <div class="form-group"><input type="text" name="phone" placeholder="Phone" class="form-control"></div>
                        </div>
                        <div class="col-12 ">
                            <div class="form-group"><textarea name="content" rows="6" minlength="10" placeholder="Message *" required="required" class="form-control"></textarea></div>
                        </div>
                    </div>
                    <div class="form-group submit"><button type="submit" class="ps-btn">Send message</button></div>
                    <div class="contact-form-group">
                        <div class="contact-message contact-success-message" style="display: none;"></div>
                        <div class="contact-message contact-error-message" style="display: none;"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Contact",
    }
</script>
