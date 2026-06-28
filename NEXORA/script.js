/**
 * ==========================================================================
 * NEXORA ARCHITECTURAL FRONTEND ENGINE - SPECIFICATION DEPLOYMENT 
 * CORE PRINCIPLE: Pure functional state management using Vanilla browser loops.
 * ==========================================================================
 */

// Global Application Core Immutable Layout Configuration State Tree
const AppState = {
    products: [],
    filteredProducts: [],
    cart: [],
    wishlist: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 10
    },
    activeFilters: {
        category: 'all',
        sort: 'default',
        searchQuery: ''
    }
};

// Semantic Explicit Definition Database for Data Tree Structures
const CATEGORIES_MASTER = [
    { id: 'electronics', name: 'Electronics', icon: 'fa-microchip', img: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80' },
    { id: 'smartphones', name: 'Smartphones', icon: 'fa-mobile-screen', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
    { id: 'laptops', name: 'Laptops', icon: 'fa-laptop', img: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=400&q=80' },
    { id: 'gaming', name: 'Gaming Sets', icon: 'fa-gamepad', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80' },
    { id: 'watches', name: 'Smart Watches', icon: 'fa-stopwatch', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80' },
    { id: 'fashion', name: 'Premium Fashion', icon: 'fa-shirt', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80' },
    { id: 'shoes', name: 'Footwear Sneakers', icon: 'fa-shoe-prints', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80' },
    { id: 'bags', name: 'Luxury Bags', icon: 'fa-briefcase', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80' },
    { id: 'decor', name: 'Home Decor', icon: 'fa-couch', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
    { id: 'accessories', name: 'Accessories', icon: 'fa-headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' }
];

const BRANDS = ['AeroTech', 'Vortex', 'Zenith', 'Quantum', 'Aura Luxury', 'Strata Line'];

const IMAGE_FALLBACK_POOL = [
    'https://picsum.photos/400/400?random=20',
    'https://picsum.photos/400/400?random=21',
    'https://picsum.photos/400/400?random=22'
];

/**
 * Procedural Dynamic Mock Factory Engine
 * Instantiates exactly 100 enterprise level records using mapping rules.
 */
function seedDatabaseEngine() {
    const generatedArray = [];
    let idCounter = 1;

    CATEGORIES_MASTER.forEach((category) => {
        // Uniform population allocation: Generate exactly 10 high-fidelity variants per category leaf node
        for(let index = 1; index <= 10; index++) {
            const currentBrand = BRANDS[(idCounter + index) % BRANDS.length];
            const basePrice = parseFloat((45 + (index * 73.5) + (idCounter * 2.1)).toFixed(2));
            const computedDiscount = (index % 3 === 0) ? Math.floor(10 + (index * 2.5)) : 0;
            
            generatedArray.push({
                id: `NEX-${idCounter.toString().padStart(4, '0')}`,
                name: `${currentBrand} ${category.name.slice(0, -1)} Elite Model-${index}X`,
                brand: currentBrand,
                category: category.id,
                price: basePrice,
                rating: parseFloat((4.0 + ((index * 7) % 11) * 0.1).toFixed(1)),
                discount: computedDiscount,
                description: `High-fidelity engineering deployment architecture built for optimization. Features premium micro-structured configuration enhancements matching professional workloads.`,
                stock: Math.floor(3 + ((index * 13) % 25)),
                // Primary high throughput photo directly maps to specific high resolution keywords on unsplash
                image: `https://images.unsplash.com/photo-${getUnsplashId(category.id, index)}?auto=format&fit=crop&w=500&q=80`,
                fallback1: `https://images.pexels.com/photos/${getPexelsId(category.id, index)}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=500`,
                fallback2: IMAGE_FALLBACK_POOL[index % IMAGE_FALLBACK_POOL.length]
            });
            idCounter++;
        }
    });
    AppState.products = generatedArray;
    AppState.filteredProducts = [...AppState.products];
}

// Maps categories to explicit Unsplash photo hashes to guarantee visual consistency
function getUnsplashId(cat, idx) {
    const map = {
        'electronics': ['1526738549149-8e07eca6c147', '1588508065123-287b28e013da', '1518770660439-4636190af475'],
        'smartphones': ['1511707171634-5f897ff02aa9', '1598327105666-5b89351aff97', '1565630916779-e303be97b6f5'],
        'laptops': ['1496181130204-755241524eab', '1603302576837-37561b2e2302', '1588872657578-7efd1f1555ed'],
        'gaming': ['1538481199705-c710c4e965fc', '1600861195091-690c92f1d2cc', '1542751371-adc38448a05e'],
        'watches': ['1508685096489-7aacd43bd3b1', '1434494878577-86c23bcb06b9', '1523275335684-37898b6baf30'],
        'fashion': ['1483985988355-763728e1935b', '1490481651871-ab68de25d43d', '1479064555552-3ef4979f8908'],
        'shoes': ['1542291026-7eec264c27ff', '1606107557195-0e29a4b5b4aa', '1608231387042-66d1773070a5'],
        'bags': ['1584917865442-de89df76afd3', '1548036328-c9fa89d128fa', '1590874103328-eac38a683ce7'],
        'decor': ['1513694203232-719a280e022f', '1616486338812-3dadae4b4ace', '1615529182904-14819c35db37'],
        'accessories': ['1505740420928-5e560c06d30e', '1583394838336-acd977736f90', '1618384887929-16ec33fab9ef']
    };
    const list = map[cat] || ['1526738549149-8e07eca6c147'];
    return list[idx % list.length];
}

// Supplemental Pexels tracking indexes
function getPexelsId(cat, idx) {
    const map = {
        'electronics': [35013, 163100, 258293],
        'smartphones': [1092644, 699122, 404280],
        'laptops': [18105, 2047905, 812264],
        'gaming': [442576, 2115367, 1174746],
        'watches': [2113994, 277390, 190819],
        'fashion': [974911, 1536619, 1036622],
        'shoes': [1598505, 2529148, 1456706],
        'bags': [1152077, 2061907, 3661622],
        'decor': [1350789, 276528, 1099816],
        'accessories': [3394656, 1649771, 3587477]
    };
    const list = map[cat] || [35013];
    return list[idx % list.length];
}

/**
 * Core Orchestration Inits Lifecycle
 */
document.addEventListener("DOMContentLoaded", async () => {
    showGlobalLoader(true);
    
    // Seed initial mock layout database state
    seedDatabaseEngine();
    
    // De-serialize LocalStorage cache structures safely via try/catch
    hydrateStorageState();
    
    // Bind event hooks across structural interactive wrappers
    setupNavbarScrollHandlers();
    setupDrawerHandlers();
    setupModalHandlers();
    setupFilterListeners();
    setupLiveSearchEngine();
    setupParallaxAnimation();
    
 // Render presentation markup passes
    renderCategoriesContainer();
    executeFilteringPipeline();
    renderRecentOrdersLedger(); // Fixed the space here
    initReviewSliderAutoScroll();

    // Kill initial hydration overlay smoothly
    setTimeout(() => showGlobalLoader(false), 500);
});
/**
 * Top Progress Loading Bar Controller Interface
 */
function showGlobalLoader(isVisible) {
    const loader = document.getElementById("global-loader");
    if (!loader) return;
    if (isVisible) {
        loader.style.transform = "translateX(-30%)";
    } else {
        loader.style.transform = "translateX(0%)";
        setTimeout(() => { loader.style.transform = "translateX(100%)"; }, 200);
        setTimeout(() => { loader.style.transform = "translateX(-100%)"; }, 500);
    }
}

/**
 * DOM Template Injectors Section
 */
function renderCategoriesContainer() {
    const container = document.getElementById("categories-container");
    const footerLinks = document.getElementById("footer-categories-links");
    if (!container) return;

    let gridHtml = '';
    let linksHtml = '';

    CATEGORIES_MASTER.forEach(category => {
        gridHtml += `
            <div class="category-card" data-category-id="${category.id}">
                <img src="${category.img}" alt="${category.name}" class="category-card-bg" loading="lazy">
                <div class="category-card-content">
                    <i class="fa-solid ${category.icon}"></i>
                    <h3>${category.name}</h3>
                </div>
            </div>
        `;
        linksHtml += `<li><a href="#shop" data-category-link="${category.id}">${category.name}</a></li>`;
    });

    container.innerHTML = gridHtml;
    if(footerLinks) footerLinks.innerHTML = linksHtml;

    // Attach delegated events onto category visual elements
    container.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            document.getElementById("category-select").value = card.dataset.categoryId;
            AppState.activeFilters.category = card.dataset.categoryId;
            AppState.pagination.currentPage = 1;
            executeFilteringPipeline();
            document.getElementById("shop").scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.querySelectorAll("[data-category-link]").forEach(link => {
        link.addEventListener("click", (e) => {
            const catId = link.getAttribute("data-category-link");
            document.getElementById("category-select").value = catId;
            AppState.activeFilters.category = catId;
            AppState.pagination.currentPage = 1;
            executeFilteringPipeline();
        });
    });

    // Hydrate filters dropdown list elements too
    const selectFilter = document.getElementById("category-select");
    CATEGORIES_MASTER.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.name;
        selectFilter.appendChild(option);
    });
}

/**
 * Master Product Core Processing Pipeline Grid Filter and Render Engine
 */
function executeFilteringPipeline() {
    let result = [...AppState.products];
    const { category, sort, searchQuery } = AppState.activeFilters;

    // 1. Array.prototype.filter functional categorization
    if (category !== 'all') {
        result = result.filter(p => p.category === category);
    }

    // 2. Search filtering optimization query trace
    if (searchQuery.trim() !== '') {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        result = result.filter(p => 
            p.name.toLowerCase().includes(normalizedQuery) || 
            p.brand.toLowerCase().includes(normalizedQuery) ||
            p.description.toLowerCase().includes(normalizedQuery)
        );
    }

    // 3. Sorting operation algorithm mutations
    if (sort === 'price-asc') {
        result.sort((a, b) => (a.price * (1 - a.discount/100)) - (b.price * (1 - b.discount/100)));
    } else if (sort === 'price-desc') {
        result.sort((a, b) => (b.price * (1 - b.discount/100)) - (a.price * (1 - a.discount/100)));
    } else if (sort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'name-asc') {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    AppState.filteredProducts = result;
    
    // Synchronize global tracker figures
    const totalItems = result.length;
    document.getElementById("total-count").textContent = totalItems;
    
    renderProductsGrid();
    renderPaginationControls();
}

/**
 * Array Slicing Layout Grid Rendering Module
 */
function renderProductsGrid() {
    const container = document.getElementById("products-container");
    if (!container) return;

    if (AppState.filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem var(--text-muted);">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>No operational items match queries inside the current index.</p>
            </div>
        `;
        document.getElementById("results-count").textContent = "0-0";
        return;
    }

    // Apply strict Array.prototype.slice constraints for dynamic single-page performance layout optimization
    const startIdx = (AppState.pagination.currentPage - 1) * AppState.pagination.itemsPerPage;
    const endIdx = Math.min(startIdx + AppState.pagination.itemsPerPage, AppState.filteredProducts.length);
    const paginatedSlice = AppState.filteredProducts.slice(startIdx, endIdx);

    document.getElementById("results-count").textContent = `${startIdx + 1}-${endIdx}`;

    let html = '';
    paginatedSlice.forEach(product => {
        const hasDiscount = product.discount > 0;
        const currentPrice = hasDiscount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2);
        const isWishlisted = AppState.wishlist.some(item => item.id === product.id);

        html += `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" 
                         onerror="this.onerror=function(){this.src='${product.fallback1}'; this.onerror=function(){this.src='${product.fallback2}';}};this.src=this.src;">
                    <div class="product-badges">
                        ${hasDiscount ? `<span class="discount-badge">-${product.discount}% OFF</span>` : ''}
                    </div>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" aria-label="Toggle Wishlist" onclick="toggleWishlistState('${product.id}')">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h4 class="product-title">${product.name}</h4>
                    <div class="product-rating">
                        <i class="fa-solid fa-star"></i> <span>${product.rating}</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-price">
                            <span class="price-current">$${currentPrice}</span>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="addProductToCartPipeline('${product.id}', this)">
                            <i class="fa-solid fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Inject structures natively ensuring rapid rendering pipelines
    container.innerHTML = html;
}

/**
 * Pagination Dynamic Calculation Control Strip Instantiation Module
 */
function renderPaginationControls() {
    const container = document.getElementById("pagination-container");
    if (!container) return;

    const totalPages = Math.ceil(AppState.filteredProducts.length / AppState.pagination.itemsPerPage);
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = `
        <button class="page-btn" id="prev-page-btn" ${AppState.pagination.currentPage === 1 ? 'disabled' : ''}>
            <i class="fa-solid fa-chevron-left"></i>
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button class="page-btn ${AppState.pagination.currentPage === i ? 'active' : ''}" data-target-page="${i}">
                ${i}
            </button>
        `;
    }

    html += `
        <button class="page-btn" id="next-page-btn" ${AppState.pagination.currentPage === totalPages ? 'disabled' : ''}>
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    container.innerHTML = html;

    // Attach active event handling routines dynamically to new page switches
    container.querySelectorAll("[data-target-page]").forEach(btn => {
        btn.addEventListener("click", () => {
            AppState.pagination.currentPage = parseInt(btn.getAttribute("data-target-page"));
            renderProductsGrid();
            renderPaginationControls();
            document.getElementById("shop").scrollIntoView({ behavior: 'smooth' });
        });
    });

    const prevBtn = document.getElementById("prev-page-btn");
    const nextBtn = document.getElementById("next-page-btn");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (AppState.pagination.currentPage > 1) {
                AppState.pagination.currentPage--;
                renderProductsGrid();
                renderPaginationControls();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (AppState.pagination.currentPage < totalPages) {
                AppState.pagination.currentPage++;
                renderProductsGrid();
                renderPaginationControls();
            }
        });
    }
}

/**
 * Operational Filter Actions Configuration Setup Routine
 */
function setupFilterListeners() {
    const categorySelect = document.getElementById("category-select");
    const sortSelect = document.getElementById("sort-select");

    if (categorySelect) {
        categorySelect.addEventListener("change", (e) => {
            AppState.activeFilters.category = e.target.value;
            AppState.pagination.currentPage = 1;
            executeFilteringPipeline();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            AppState.activeFilters.sort = e.target.value;
            AppState.pagination.currentPage = 1;
            executeFilteringPipeline();
        });
    }
}

/**
 * High Performance Live Search Pipeline with Event Debouncing Suggestions
 */
function setupLiveSearchEngine() {
    const input = document.getElementById("search-input");
    const suggestionsBox = document.getElementById("search-suggestions");
    if (!input || !suggestionsBox) return;

    input.addEventListener("input", (e) => {
        const value = e.target.value;
        AppState.activeFilters.searchQuery = value;
        AppState.pagination.currentPage = 1;
        executeFilteringPipeline();

        if (value.trim().length < 2) {
            suggestionsBox.classList.add("hidden");
            return;
        }

        // Generate dynamic instant matching subsets using continuous look ahead iteration limits
        const matching = AppState.products.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).slice(0, 5);
        
        if (matching.length === 0) {
            suggestionsBox.classList.add("hidden");
            return;
        }

        let suggestionsHtml = '';
        matching.forEach(p => {
            suggestionsHtml += `
                <div class="suggestion-item" data-suggestion-id="${p.id}">
                    <img src="${p.image}" alt="" onerror="this.src='${p.fallback1}'">
                    <div>
                        <div style="font-size:0.85rem; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:220px;">${p.name}</div>
                        <div style="font-size:0.75rem; color:var(--secondary); font-weight:700;">$${p.price}</div>
                    </div>
                </div>
            `;
        });

        suggestionsBox.innerHTML = suggestionsHtml;
        suggestionsBox.classList.remove("hidden");

        suggestionsBox.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                const id = item.getAttribute("data-suggestion-id");
                const matchedProd = AppState.products.find(p => p.id === id);
                if (matchedProd) {
                    input.value = matchedProd.name;
                    AppState.activeFilters.searchQuery = matchedProd.name;
                    executeFilteringPipeline();
                    suggestionsBox.classList.add("hidden");
                }
            });
        });
    });

    // Close on loss of keyboard focus fields
    document.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add("hidden");
        }
    });
}

/**
 * Functional Shopping Cart Processing Subsystem Pipeline
 */
function addProductToCartPipeline(productId, triggerButton) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    // Check if target element exists in operational cart array using Array.prototype.find
    const existing = AppState.cart.find(item => item.id === productId);
    
    if (existing) {
        if (existing.quantity >= product.stock) {
            spawnSystemToastAlert(`Critical Limit: Absolute stock constraints ceiling reached (${product.stock} units maximum).`, "info");
            return;
        }
        existing.quantity++;
    } else {
        AppState.cart.push({
            id: product.id,
            name: product.name,
            price: product.discount > 0 ? parseFloat((product.price * (1 - product.discount/100)).toFixed(2)) : product.price,
            image: product.image,
            fallback1: product.fallback1,
            quantity: 1
        });
    }

    // Microanimation bounce payload execution
    triggerFlyToCartAnimation(triggerButton);
    updateGlobalBadgesAndSyncStorage();
    renderCartSidebarContents();
    spawnSystemToastAlert(`State hydrated successfully: added [${product.name}] to cart array.`);
}

function modifyCartItemQuantity(productId, modifierDelta) {
    const item = AppState.cart.find(i => i.id === productId);
    if (!item) return;
    
    const originalRef = AppState.products.find(p => p.id === productId);

    if (modifierDelta > 0 && item.quantity >= originalRef.stock) {
        spawnSystemToastAlert("Absolute available physical units inventory stock overflow exception caught.", "info");
        return;
    }

    item.quantity += modifierDelta;
    
    if (item.quantity <= 0) {
        // Splice entry directly from index
        const index = AppState.cart.findIndex(i => i.id === productId);
        AppState.cart.splice(index, 1);
        spawnSystemToastAlert("Product array cell removed from current sequence mapping.");
    }

    updateGlobalBadgesAndSyncStorage();
    renderCartSidebarContents();
}

function removeProductFromCartArray(productId) {
    const index = AppState.cart.findIndex(i => i.id === productId);
    if (index !== -1) {
        AppState.cart.splice(index, 1);
        updateGlobalBadgesAndSyncStorage();
        renderCartSidebarContents();
        spawnSystemToastAlert("Target items array row structural record fully deleted.");
    }
}

function purgeCartMemoryState() {
    if (AppState.cart.length === 0) return;
    AppState.cart = [];
    updateGlobalBadgesAndSyncStorage();
    renderCartSidebarContents();
    spawnSystemToastAlert("System operational allocation arrays completely formatted.", "info");
}

function renderCartSidebarContents() {
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    if (AppState.cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; margin-top: 4rem; color: var(--text-muted);">
                <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; margin-bottom: 1rem; display:block;"></i>
                <p>Allocation array remains empty. Inject catalog states.</p>
            </div>
        `;
        document.getElementById("cart-total-amount").textContent = "$0.00";
        return;
    }

    let html = '';
    AppState.cart.forEach(item => {
        html += `
            <div class="drawer-item">
                <img src="${item.image}" alt="" onerror="this.src='${item.fallback1}'">
                <div class="drawer-item-details">
                    <h5>${item.name}</h5>
                    <div class="price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="modifyCartItemQuantity('${item.id}', -1)">-</button>
                        <span style="font-size:0.9rem; font-weight:700;">${item.quantity}</span>
                        <button class="qty-btn" onclick="modifyCartItemQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="item-remove-btn" aria-label="Delete product entry" onclick="removeProductFromCartArray('${item.id}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = html;

    // Utilize dynamic functional Array.prototype.reduce arithmetic loops
    const absoluteSum = AppState.cart.reduce((accumulator, pointer) => accumulator + (pointer.price * pointer.quantity), 0);
    document.getElementById("cart-total-amount").textContent = `$${absoluteSum.toFixed(2)}`;
}

/**
 * Functional Wishlist State Synchronization Subsystem Pipeline
 */
function toggleWishlistState(productId) {
    const product = AppState.products.find(p => p.id === productId);
    const targetIdx = AppState.wishlist.findIndex(item => item.id === productId);

    if (targetIdx !== -1) {
        AppState.wishlist.splice(targetIdx, 1);
        spawnSystemToastAlert("Favorite element link structurally popped.");
    } else {
        AppState.wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            fallback1: product.fallback1
        });
        spawnSystemToastAlert("Element state successfully linked into favorites array.");
    }

    updateGlobalBadgesAndSyncStorage();
    renderWishlistSidebarContents();
    
    // Partially update specific visible nodes instead of wiping active page display lists
    const matchedCard = document.querySelector(`.product-card[data-product-id="${productId}"] .wishlist-btn`);
    if(matchedCard) {
        matchedCard.classList.toggle("active");
        const iconNode = matchedCard.querySelector("i");
        iconNode.className = iconNode.className.includes("fa-solid") ? "fa-regular fa-heart" : "fa-solid fa-heart";
    }
}

function renderWishlistSidebarContents() {
    const container = document.getElementById("wishlist-items-container");
    if (!container) return;

    if (AppState.wishlist.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; margin-top: 4rem; color: var(--text-muted);">
                <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 1rem; display:block;"></i>
                <p>No item allocations present here.</p>
            </div>
        `;
        return;
    }

    let html = '';
    AppState.wishlist.forEach(item => {
        html += `
            <div class="drawer-item">
                <img src="${item.image}" alt="" onerror="this.src='${item.fallback1}'">
                <div class="drawer-item-details">
                    <h5 style="font-size:0.85rem;">${item.name}</h5>
                    <div class="price">$${item.price.toFixed(2)}</div>
                    <button class="btn btn-primary btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem; margin-top:0.4rem;" 
                            onclick="addProductToCartPipeline('${item.id}', this)">
                        <i class="fa-solid fa-plus"></i> Move to Cart
                    </button>
                </div>
                <button class="item-remove-btn" onclick="toggleWishlistState('${item.id}')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    });
    container.innerHTML = html;
}

/**
 * Universal State Hydration and Badge Synchronizer Module
 */
function updateGlobalBadgesAndSyncStorage() {
    const cartCount = AppState.cart.reduce((acc, current) => acc + current.quantity, 0);
    const wishCount = AppState.wishlist.length;

    const cartBadge = document.getElementById("cart-badge");
    const wishBadge = document.getElementById("wishlist-badge");

    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? "flex" : "none";
    }
    if (wishBadge) {
        wishBadge.textContent = wishCount;
        wishBadge.style.display = wishCount > 0 ? "flex" : "none";
    }

    // JSON serialize storage pipeline commits
    localStorage.setItem("NEXORA_CART_CACHE", JSON.stringify(AppState.cart));
    localStorage.setItem("NEXORA_WISHLIST_CACHE", JSON.stringify(AppState.wishlist));
}

function hydrateStorageState() {
    try {
        const cachedCart = localStorage.getItem("NEXORA_CART_CACHE");
        const cachedWish = localStorage.getItem("NEXORA_WISHLIST_CACHE");

        if (cachedCart) AppState.cart = JSON.parse(cachedCart);
        if (cachedWish) AppState.wishlist = JSON.parse(cachedWish);
        
        updateGlobalBadgesAndSyncStorage();
        renderCartSidebarContents();
        renderWishlistSidebarContents();
    } catch (e) {
        console.error("Storage state initialization layer error context caught: ", e);
    }
}

/**
 * System Notification Core Dialogues Factory Engine
 */
function spawnSystemToastAlert(messageText, tierType = "success") {
    const deck = document.getElementById("toast-container");
    if (!deck) return;

    const piece = document.createElement("div");
    piece.className = `toast ${tierType}`;
    piece.innerHTML = `
        <i class="fa-solid ${tierType === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
        <span>${messageText}</span>
    `;

    deck.appendChild(piece);

    // Auto terminate active reference blocks from viewport maps
    setTimeout(() => {
        piece.style.opacity = "0";
        piece.style.transform = "translateX(50px)";
        setTimeout(() => piece.remove(), 300);
    }, 3500);
}

/**
 * System UI Animation Interaction Controls Bindings Layers
 */
function setupNavbarScrollHandlers() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Mobile Hamburger Trigger Logic Toggle Row Linkages
    const burger = document.getElementById("hamburger-menu");
    const menuList = document.getElementById("nav-menu");

    if (burger && menuList) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menuList.classList.toggle("active");
        });
        
        menuList.querySelectorAll("a").forEach(l => {
            l.addEventListener("click", () => {
                burger.classList.remove("active");
                menuList.classList.remove("active");
            });
        });
    }
}

function setupDrawerHandlers() {
    const overlay = document.getElementById("drawer-overlay");
    const cartToggle = document.getElementById("cart-toggle-btn");
    const cartClose = document.getElementById("cart-close-btn");
    const cartSide = document.getElementById("cart-sidebar");
    
    const wishToggle = document.getElementById("wishlist-toggle-btn");
    const wishClose = document.getElementById("wishlist-close-btn");
    const wishSide = document.getElementById("wishlist-sidebar");

    const clearCartBtn = document.getElementById("empty-cart-btn");
    const checkoutBtn = document.getElementById("checkout-btn");

    function openDrawer(drawer) {
        document.body.classList.add("drawer-open");
        overlay.classList.add("active");
        drawer.classList.add("active");
    }

    function closeAllDrawers() {
        document.body.classList.remove("drawer-open");
        overlay.classList.remove("active");
        if(cartSide) cartSide.classList.remove("active");
        if(wishSide) wishSide.classList.remove("active");
    }

    if(cartToggle && cartSide) cartToggle.addEventListener("click", () => openDrawer(cartSide));
    if(wishToggle && wishSide) wishToggle.addEventListener("click", () => openDrawer(wishSide));
    if(cartClose) cartClose.addEventListener("click", closeAllDrawers);
    if(wishClose) wishClose.addEventListener("click", closeAllDrawers);
    if(overlay) overlay.addEventListener("click", closeAllDrawers);

    if(clearCartBtn) clearCartBtn.addEventListener("click", () => purgeCartMemoryState());
    if(checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (AppState.cart.length === 0) return;
            showGlobalLoader(true);
            setTimeout(() => {
                showGlobalLoader(false);
                purgeCartMemoryState();
                closeAllDrawers();
                spawnSystemToastAlert("Transaction signature ledger verified! Cart allocation flushed.");
            }, 1200);
        });
    }
}

function setupModalHandlers() {
    const modal = document.getElementById("auth-modal");
    const openBtn = document.getElementById("login-modal-btn");
    const closeBtn = document.getElementById("auth-close-btn");
    
    const tLogin = document.getElementById("tab-login-btn");
    const tReg = document.getElementById("tab-register-btn");
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => modal.classList.add("active"));
    }
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    if (tLogin && tReg && loginForm && regForm) {
        tLogin.addEventListener("click", () => {
            tLogin.classList.add("active");
            tReg.classList.remove("active");
            loginForm.classList.remove("hidden");
            regForm.classList.add("hidden");
        });

        tReg.addEventListener("click", () => {
            tReg.classList.add("active");
            tLogin.classList.remove("active");
            regForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
        });
    }

    // Intercept form submissions to bypass default reload actions
    if(loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            modal.classList.remove("active");
            spawnSystemToastAlert("Secure operational profile key authenticated.");
        });
    }
    if(regForm) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            modal.classList.remove("active");
            spawnSystemToastAlert("Node registered successfully inside server index schema network.");
        });
    }
}

/**
 * GPU Accelerated Mouse Parallax Translation Pipeline
 */
function setupParallaxAnimation() {
    const boundingFrame = document.getElementById("hero-parallax-scene");
    if (!boundingFrame) return;

    const dynamicLayers = boundingFrame.querySelectorAll(".layer");

    window.addEventListener("mousemove", (event) => {
        const xCoordinate = event.clientX / window.innerWidth;
        const yCoordinate = event.clientY / window.innerHeight;

        // Optimized utilizing native modern layout transform matrices
        dynamicLayers.forEach(layer => {
            const accelerationDepth = parseFloat(layer.getAttribute("data-depth")) || 0.2;
            const xTranslationMove = (0.5 - xCoordinate) * (accelerationDepth * 80);
            const yTranslationMove = (0.5 - yCoordinate) * (accelerationDepth * 80);
            layer.style.transform = `translate3d(${xTranslationMove}px, ${yTranslationMove}px, 0)`;
        });
    });
}

/**
 * Dynamic Flight Badge Particle Vector Accelerator Animation Micro-Pipeline
 */
function triggerFlyToCartAnimation(buttonElement) {
    if (!buttonElement) return;
    const targetBadge = document.getElementById("cart-toggle-btn");
    if (!targetBadge) return;

    const sourcePositionBox = buttonElement.getBoundingClientRect();
    const destinationPositionBox = targetBadge.getBoundingClientRect();

    const energyParticleDot = document.createElement("div");
    energyParticleDot.style.cssText = `
        position: fixed;
        top: ${sourcePositionBox.top + 10}px;
        left: ${sourcePositionBox.left + 20}px;
        width: 14px;
        height: 14px;
        background: var(--accent);
        border-radius: 50%;
        z-index: 9999;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    `;

    document.body.appendChild(energyParticleDot);

    // Force frame refresh compute sequence, then initialize layout animation tracking rules
    requestAnimationFrame(() => {
        energyParticleDot.style.top = `${destinationPositionBox.top + 15}px`;
        energyParticleDot.style.left = `${destinationPositionBox.left + 15}px`;
        energyParticleDot.style.transform = "scale(0.2)";
        energyParticleDot.style.opacity = "0.4";
    });

    setTimeout(() => {
        energyParticleDot.remove();
        targetBadge.style.animation = "none";
        // Enforce brief layout cycle computation to permit element reset states
        requestAnimationFrame(() => {
            targetBadge.style.animation = "badgeBounce 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        });
    }, 600);
}

/**
 * Dynamic Automated Simulated System Ledger Blocks
 */
function renderRecentOrdersLedger() {
    const targetBlock = document.getElementById("recent-orders-container");
    if (!targetBlock) return;

    const operationalMockTransactions = [
        { id: "TXN-9082", value: "$124.50", state: "Delivered", color: "status-delivered" },
        { id: "TXN-4421", value: "$1,894.00", state: "Shipped", color: "status-shipped" },
        { id: "TXN-1109", value: "$45.99", state: "Processing", color: "status-processing" }
    ];

    let itemsMarkup = '';
    operationalMockTransactions.forEach(item => {
        itemsMarkup += `
            <div class="order-ledger-row">
                <div><strong>${item.id}</strong> <span style="color:var(--text-muted); margin-left:10px;">${item.value}</span></div>
                <span class="status-badge ${item.color}">${item.state}</span>
            </div>
        `;
    });
    targetBlock.innerHTML = itemsMarkup;
}

/**
 * High Performance Autoscroll Testimonial Slider Architecture Module
 */
function initReviewSliderAutoScroll() {
    const viewContainer = document.getElementById("reviews-slider");
    if (!viewContainer) return;

    const collectionReviews = [
        { name: "Alex R.", position: "Lead Architect", review: "The asynchronous optimization paradigms utilized across this framework layer render processing delay states completely negligible. Phenomenal single-page output velocity metrics.", stars: 5, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
        { name: "Marcus V.", position: "Full-Stack Dev", review: "Pure functional programming patterns executed via clean modern Vanilla script layout loops. This is textbook UI performance configuration planning.", stars: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
        { name: "Serena K.", position: "UX Researcher", review: "The micro-structured transitions, glass filters, and responsive constraints adapt layout elements perfectly to physical hardware parameters across display limits.", stars: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
    ];

    let itemsMarkup = '';
    collectionReviews.forEach(item => {
        let starStr = '<i class="fa-solid fa-star"></i>'.repeat(item.stars);
        itemsMarkup += `
            <div class="glass-card review-card">
                <div class="review-stars">${starStr}</div>
                <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem; font-style:italic; color:var(--text-muted);">"${item.review}"</p>
                <div class="review-user">
                    <img src="${item.avatar}" alt="${item.name}" loading="lazy">
                    <div>
                        <h4>${item.name}</h4>
                        <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${item.position}</span>
                    </div>
                </div>
            </div>
        `;
    });

    viewContainer.innerHTML = itemsMarkup;

    // Fluid continuous carousel animation loop processing rules using simple timer cycles
    let indexPointer = 0;
    setInterval(() => {
        indexPointer = (indexPointer + 1) % collectionReviews.length;
        const widthModifier = window.innerWidth < 768 ? 100 : window.innerWidth < 1100 ? 50 : 33.333;
        
        if(window.innerWidth >= 1100 && indexPointer === 0) {
            viewContainer.style.transform = `translateX(0px)`;
            return;
        }
        
        const calculationOffset = indexPointer * (widthModifier + 1.5);
        viewContainer.style.transform = `translateX(-${calculationOffset}%)`;
    }, 6000);
}

// Bind newsletter submission confirmation notice pipeline hook
const newsForm = document.getElementById("newsletter-form");
if(newsForm) {
    newsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newsForm.reset();
        spawnSystemToastAlert("Developer communication pipeline channel open. Synchronization established.");
    });
}