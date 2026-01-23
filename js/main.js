/**
 * 主JavaScript文件 - Academic Personal Homepage (高级版)
 * 作者: AI Assistant
 * 日期: 2026-01-23
 * 
 * 新增高级特效：
 * - 滚动淡入动画
 * - 鼠标跟随效果
 * - 导航栏滚动效果
 */

/**
 * ==================== 可配置选项 ====================
 */

// 论文摘要展开/折叠配置
const ABSTRACT_CONFIG = {
    expandText: 'Show more',     // 展开时的显示文本
    collapseText: 'Show less',   // 收起时的显示文本
    maxHeight: 100,              // 收起状态下的最大高度（像素）
    animationDuration: 400       // 动画时长（毫秒）
};

/**
 * ==================== 初始化函数 ====================
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initAbstractToggles();
    initSmoothScroll();
    initActiveNavHighlight();
    initNavbarScrollEffect();
    initScrollAnimations();
    initMouseFollower();
});

/**
 * 初始化论文摘要展开/折叠功能
 */
function initAbstractToggles() {
    const abstracts = document.querySelectorAll('.publication-abstract');
    
    abstracts.forEach((abstract) => {
        let toggleBtn = abstract.nextElementSibling?.querySelector('.abstract-toggle');
        
        if (!toggleBtn && abstract.textContent.trim().length > 10) {
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'abstract-toggle';
            toggleBtn.style.cssText = `
                background: none;
                border: none;
                color: var(--primary-color, #667eea);
                cursor: pointer;
                font-size: 0.85rem;
                padding: 0;
                margin-bottom: 1rem;
                text-decoration: underline;
                font-weight: 500;
                transition: color 0.3s ease;
            `;
            toggleBtn.textContent = ABSTRACT_CONFIG.expandText;
            
            const linksDiv = abstract.nextElementSibling;
            if (linksDiv && linksDiv.classList.contains('publication-links')) {
                linksDiv.parentNode.insertBefore(toggleBtn, linksDiv);
                
                toggleBtn.addEventListener('click', function() {
                    toggleAbstract(abstract, toggleBtn);
                });
            }
        }
    });
}

/**
 * 切换摘要的展开/收起状态
 */
function toggleAbstract(abstract, button) {
    const isExpanded = abstract.classList.contains('expanded');
    
    if (isExpanded) {
        abstract.classList.remove('expanded');
        abstract.style.maxHeight = ABSTRACT_CONFIG.maxHeight + 'px';
        button.textContent = ABSTRACT_CONFIG.expandText;
    } else {
        abstract.classList.add('expanded');
        abstract.style.maxHeight = abstract.scrollHeight + 'px';
        button.textContent = ABSTRACT_CONFIG.collapseText;
    }
}

/**
 * 初始化平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 初始化导航栏高亮
 */
function initActiveNavHighlight() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 页面滚动时导航栏效果
 */
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', debounce(function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 10));
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px 80px 0px',  
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);
    
    // 为卡片添加动画观察
    const cards = document.querySelectorAll('.section-card, .paper-card');
    cards.forEach((card) => {
        observer.observe(card);
    });
}

/**
 * 鼠标跟随效果
 */
function initMouseFollower() {
    const cursor = document.createElement('div');
    cursor.className = 'mouse-follower';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(102, 126, 234, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    // 检测是否支持 hover 的设备
    if (window.matchMedia('(hover: hover)').matches) {
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', throttle(function(e) {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }, 16));
        
        // 悬停时放大光标
        const hoverElements = document.querySelectorAll('a, button, .publication-item, .section-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.borderColor = 'rgba(102, 126, 234, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderColor = 'rgba(102, 126, 234, 0.5)';
            });
        });
    }
}

/**
 * ==================== 实用工具函数 ====================
 */

/**
 * 防抖函数 - 限制函数执行频率
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数 - 确保函数在指定时间内最多执行一次
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 页面滚动到顶部
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
