<script lang="ts">
    import {
        Button,
        Card, CardBody,
        CardHeader,
        CardTitle, Navbar, NavbarBrand, Pagination, PaginationItem, PaginationLink,
    } from "@sveltestrap/sveltestrap";

    export let data;
    $: catData = data.cats;
    $: maxPages = data.maxPages;
    $: currentPage = data.page;

</script>

<Navbar color="primary-subtle" class="mb-2">
    <NavbarBrand href="/">Der Katzenbrowser</NavbarBrand>
    <form class="d-flex">
            <input class="form-control" type="search" placeholder="Suche" name="search" value="{data.search || ''}">
            <Button type="submit">Suche</Button>
    </form>
</Navbar>


<div class="container">
    <h1 class="text-center">Übersicht</h1>

    <div style="margin-bottom: 0.5vh">
        {#each catData as cat}
            <Card style="margin-bottom: 0.5vh">
                <CardHeader>
                    <CardTitle><a href="cats/{cat.id}">{cat.alt}</a></CardTitle>
                </CardHeader>
                <img src="{cat.image}" alt={cat.alt} style="max-height: 25vh; object-fit: contain"/>
                <CardBody class="container" style="max-height: 50vh">
                    <span>Katzen: {cat.picturedCats}</span>
                    <br/>
                    <span class="align-self-end">Datum: {cat.date}</span>
                </CardBody>
            </Card>
        {/each}
    </div>

    <div class="d-flex flex-row justify-content-center">
        <Pagination>
            {#each {length: maxPages} as _, i}
                <PaginationItem active="{currentPage === i + 1}">
                    <PaginationLink href="?page={i + 1}">{i + 1}</PaginationLink>
                </PaginationItem>
            {/each}
        </Pagination>
    </div>
</div>
