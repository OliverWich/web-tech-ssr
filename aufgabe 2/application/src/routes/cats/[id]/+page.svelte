<script>
    import {Image, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "@sveltestrap/sveltestrap";
    import {afterNavigate} from "$app/navigation";


    afterNavigate(({from}) => {
        //hier kann die URL von der vorherigen Seite geholt werden
    })
</script>

<Navbar color="primary-subtle" class="mb-2">
    <NavbarBrand href="/">Der Katzenbrowser</NavbarBrand>
    <Nav>
        <NavItem>
            <!-- Link zur vorherigen Seite hinzufügen-->
            <NavLink>Zur vorherigen Seite</NavLink>
        </NavItem>
    </Nav>
</Navbar>

<div class="container">
    <!-- Hier die nötigen Daten ausgeben-->
    <h1 class="text-center"></h1>

    <div class="d-flex flex-row justify-content-center">
        <Image style="max-height: 75vh" fluid></Image>
    </div>

</div>
