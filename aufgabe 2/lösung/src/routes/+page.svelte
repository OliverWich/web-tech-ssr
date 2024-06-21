<script lang="ts">
    import {
        Button,
        Card, CardBody,
        CardHeader, CardImg,
        CardTitle, Navbar, NavbarBrand, Pagination, PaginationItem, PaginationLink,
    } from "@sveltestrap/sveltestrap";

    import {cats} from './cats'

    export let data;
    $: catData = data.cats;
    $: maxPages = data.maxPages;

    let searchString: string;

    function search() {
        catData = cats.map((value) => ({
            id: value.id,
            image: value.image,
            alt: value.alt,
            cats: value.picturedCats,
            date: value.date
        })).filter(value =>
            value.alt.includes(searchString)
        )
        maxPages = 1;
    }
</script>

<Navbar color="primary-subtle" class="mb-2">
    <NavbarBrand href="/">Der Katzenbrowser</NavbarBrand>
    <form class="d-flex">
            <input class="form-control" type="search" placeholder="Suche" bind:value={searchString}>
            <Button on:click={search}>Suche</Button>
    </form>
</Navbar>


<div class="container">
    <h1 class="text-center">Übersicht</h1>

    <div style="margin-bottom: 0.5vh">
        {#each catData as cat}
            <Card style="margin-bottom: 0.5vh">
                <CardHeader>
                    <CardTitle><a href="/cats/{cat.id}">{cat.alt}</a></CardTitle>
                </CardHeader>
                <img style="max-height: 25vh; object-fit: contain" alt={cat.alt} src={cat.image}/>
                <CardBody class="container" style="max-height: 50vh">
                    <span>Katzen: {cat.cats}</span>
                    <span class="align-self-end">Datum: {cat.date?.toLocaleDateString()}</span>
                </CardBody>
            </Card>
        {/each}
    </div>

    <div class="d-flex flex-row justify-content-center">
        <Pagination>
            {#each {length: maxPages} as _, i}
                <PaginationItem>
                    <PaginationLink href="?page={i + 1}">{i + 1}</PaginationLink>
                </PaginationItem>
            {/each}
        </Pagination>
    </div>
</div>
