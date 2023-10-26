$(document).ready(function () {
    $(".category-button").click(function (e) {
        e.preventDefault();
        const selectedCategory = $(this).data('category');
        showRecipes(selectedCategory);
    });

    $(".show-all").click(function (e) {
        e.preventDefault();
        showRecipes('Show All');
    });

    function showRecipes(category) {
        if (category === 'Show All') {
            $(".recipe-card-container").show();
        } else {
            $(".recipe-card-container").hide();
            $(`.recipe-card-container[data-category="${category}"]`).show();
        }
    }

    $("#searchButton").click(function () {
        performSearch();
    });

    $("#searchInput").keypress(function (event) {
        if (event.keyCode === 13) {
            performSearch();
        }
    });

    $("#searchInput").on("input", function () {
        if ($(this).val().trim() === "") {
            $(".recipe-card-container").show();
        }
    });

    function performSearch() {
        var searchTerm = $("#searchInput").val().toLowerCase();

        $(".recipe-card-container").each(function () {
            var recipeName = $(this).find(".recipe-name").text().toLowerCase();
            if (recipeName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    $(".dropdown-item").click(function () {
        const sortValue = $(this).data('value');
        $("#sortButton").text(`${$(this).text()}`);
        sortRecipes(sortValue);
    });

    $("#sortFeatured").click(function () {
        $(".dropdown-item").removeClass("active");
        $(".recipe-card-container").show();
    });

    function sortRecipes(sortValue) {
        const recipeCards = $(".recipe-card-container");

        switch (sortValue) {
            case 'nameAsc':
                recipeCards.sort((a, b) => {
                    const nameA = $(a).find(".recipe-name").text().toLowerCase();
                    const nameB = $(b).find(".recipe-name").text().toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'nameDesc':
                recipeCards.sort((a, b) => {
                    const nameA = $(a).find(".recipe-name").text().toLowerCase();
                    const nameB = $(b).find(".recipe-name").text().toLowerCase();
                    return nameB.localeCompare(nameA);
                });
                break;
            default:
                break;
        }

        $(".recipe-grid").empty();
        recipeCards.appendTo(".recipe-grid");
    }
});