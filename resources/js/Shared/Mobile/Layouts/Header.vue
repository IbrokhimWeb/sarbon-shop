<template>
    <header class="header header--mobile" data-sticky="true">
        <div class="navigation--mobile">
            <div class="navigation__left">
                <a class="ps-logo" :href="route('home')">
                    <img alt="Waremarket" height="25" src="images/logo.png">
                </a>
            </div>
            <div class="navigation__right">
                <div class="header__actions">
                    <div class="ps-block--user-header">
                        <div class="ps-block__left">
                            <a class="header__extra" href="#">
                                <i class="lnr lnr-user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation--mobile navigation__bottom">
            <div class="navigation__left">
                <a href="#">
                    Track your order
                </a>
            </div>
            <div class="navigation__right">
                <div class="ps-dropdown">
                    <a href="#">
                        <span>
                            USD $
                        </span>
                    </a>
                    <ul class="ps-dropdown-menu">
                        <li>
                            <a href="#">
                                <span>
                                    USD $
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    EUR €
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {};
</script>
