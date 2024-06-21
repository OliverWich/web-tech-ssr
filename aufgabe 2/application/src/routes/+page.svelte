<script lang="ts">
    import {
        Button,
        Card, CardBody,
        CardHeader,
        CardTitle, Navbar, NavbarBrand, Pagination, PaginationItem, PaginationLink,
    } from "@sveltestrap/sveltestrap";

</script>

<!-- Hier die Suche implementieren-->
<Navbar color="primary-subtle" class="mb-2">
    <NavbarBrand href="/">Der Katzenbrowser</NavbarBrand>
    <form class="d-flex">
            <input class="form-control" type="search" placeholder="Suche">
            <Button>Suche</Button>
    </form>
</Navbar>


<div class="container">
    <h1 class="text-center">Übersicht</h1>

    <div style="margin-bottom: 0.5vh">
            <!-- Hier die nötigen Daten für die Übersicht hinzufügen-->
            <Card style="margin-bottom: 0.5vh">
                <CardHeader>
                    <CardTitle><a></a></CardTitle>
                </CardHeader>
                <img style="max-height: 25vh; object-fit: contain"/>
                <CardBody class="container" style="max-height: 50vh">
                    <span>Katzen: </span>
                    <span class="align-self-end">Datum:</span>
                </CardBody>
            </Card>
    </div>

    <div class="d-flex flex-row justify-content-center">
        <!-- Pagination implementieren -->
        <Pagination>
                <PaginationItem>
                    <PaginationLink></PaginationLink>
                </PaginationItem>
        </Pagination>
    </div>
</div>
