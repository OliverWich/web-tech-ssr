<script lang="ts">
    import {Image, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "@sveltestrap/sveltestrap";
    import {afterNavigate} from "$app/navigation";

    export let data;

    let previousPage : string | undefined;
    afterNavigate(({from}) => {
        previousPage = from?.url.toString();
    })
</script>

<Navbar color="primary-subtle" class="mb-2">
    <NavbarBrand href="/">Der Katzenbrowser</NavbarBrand>
    <Nav>
        <NavItem>
            {#if previousPage}
                <NavLink href="{previousPage}">Zur vorherigen Seite</NavLink>
            {/if}
        </NavItem>
    </Nav>
</Navbar>

<div class="container">
    <h1 class="text-center">{data.alt}</h1>

    <div class="d-flex flex-row justify-content-center">
        <Image src="{data.image}" style="max-height: 75vh" fluid></Image>
    </div>

    <span>Katzen: {data.picturedCats}</span>
    <br/>
    <span>Datum: {data.date}</span>
    <br/>
    <span>Beschreibung: {data.description}</span>
</div>
