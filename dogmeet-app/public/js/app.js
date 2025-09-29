/**
 * DogMeet - Aplicación de red social canina
 * JavaScript principal para la funcionalidad de la aplicación
 */

class DogMeetApp {
    constructor() {
        this.currentTab = 'profile';
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        this.setupTabNavigation();
        this.setupPhotoGallery();
        this.setupPipicanOccupation();
        this.setupEventHandlers();
    }

    /**
     * Configura la navegación por pestañas
     */
    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target);
            });
        });
    }

    /**
     * Cambia a una pestaña específica
     * @param {HTMLElement} button - Botón de la pestaña clickeada
     */
    switchTab(button) {
        // Remover clase activa de todos los botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase activa al botón clickeado
        button.classList.add('active');
        
        // Ocultar todos los contenidos
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Mostrar el contenido correspondiente
        const tabId = button.getAttribute('data-tab');
        const targetContent = document.getElementById(tabId);
        
        if (targetContent) {
            targetContent.classList.add('active');
            this.currentTab = tabId;
        }
    }

    /**
     * Configura la galería de fotos del perro
     */
    setupPhotoGallery() {
        // El cambio de foto principal se maneja con onclick en el HTML
        // pero podríamos mejorarlo aquí si fuera necesario
    }

    /**
     * Configura la visualización de ocupación de pipicanes
     */
    setupPipicanOccupation() {
        const pipicanItems = document.querySelectorAll('.pipican-item');
        
        pipicanItems.forEach(item => {
            const occupationText = item.querySelector('p')?.textContent;
            if (occupationText) {
                const match = occupationText.match(/(\d+)%/);
                if (match) {
                    const occupation = parseInt(match[1]);
                    this.setPipicanOccupationColor(item, occupation);
                }
            }
        });
    }

    /**
     * Establece el color de ocupación para un pipican
     * @param {HTMLElement} item - Elemento del pipican
     * @param {number} occupation - Porcentaje de ocupación
     */
    setPipicanOccupationColor(item, occupation) {
        let color;
        if (occupation < 30) {
            color = '#4CAF50'; // Verde - Baja ocupación
        } else if (occupation < 60) {
            color = '#FFC107'; // Amarillo - Ocupación media
        } else {
            color = '#F44336'; // Rojo - Alta ocupación
        }
        
        item.style.borderLeft = `4px solid ${color}`;
    }

    /**
     * Configura los manejadores de eventos adicionales
     */
    setupEventHandlers() {
        // Manejador para el botón "Estoy en este pipican"
        this.setupPipicanCheckIn();
        
        // Manejadores para los botones de match
        this.setupMatchButtons();
        
        // Manejadores para los botones de profesionales
        this.setupProfessionalButtons();
        
        // Manejador para crear eventos
        this.setupEventCreation();
    }

    /**
     * Configura el check-in en pipicanes
     */
    setupPipicanCheckIn() {
        const checkInButton = document.querySelector('.btn-accent');
        if (checkInButton && checkInButton.textContent.includes('Estoy en este pipican')) {
            checkInButton.addEventListener('click', () => {
                this.handlePipicanCheckIn();
            });
        }
    }

    /**
     * Maneja el check-in en un pipican
     */
    handlePipicanCheckIn() {
        // Aquí se podría implementar la lógica de check-in
        alert('¡Check-in realizado! Has marcado tu presencia en este pipican.');
    }

    /**
     * Configura los botones de match (Sí/No)
     */
    setupMatchButtons() {
        const matchButtons = document.querySelectorAll('#match .btn');
        
        matchButtons.forEach(button => {
            if (button.textContent.includes('Sí') || button.textContent.includes('No')) {
                button.addEventListener('click', (e) => {
                    this.handleMatchAction(e.target);
                });
            }
        });
    }

    /**
     * Maneja las acciones de match
     * @param {HTMLElement} button - Botón clickeado
     */
    handleMatchAction(button) {
        const isLike = button.textContent.includes('Sí');
        const action = isLike ? 'like' : 'pass';
        
        // Aquí se implementaría la lógica de match
        console.log(`Match action: ${action}`);
        
        // Simular cambio de perro
        this.loadNextDog();
    }

    /**
     * Carga el siguiente perro en el sistema de match
     */
    loadNextDog() {
        // Aquí se implementaría la lógica para cargar el siguiente perro
        console.log('Cargando siguiente perro...');
    }

    /**
     * Configura los botones de profesionales
     */
    setupProfessionalButtons() {
        const proButtons = document.querySelectorAll('#pros .btn');
        
        proButtons.forEach(button => {
            if (button.textContent.includes('Reservar')) {
                button.addEventListener('click', (e) => {
                    this.handleProfessionalBooking(e.target);
                });
            }
        });
    }

    /**
     * Maneja la reserva de profesionales
     * @param {HTMLElement} button - Botón de reserva clickeado
     */
    handleProfessionalBooking(button) {
        const proCard = button.closest('.pro-card');
        const proName = proCard.querySelector('.pro-name')?.textContent;
        
        if (proName) {
            alert(`Redirigiendo a la reserva con ${proName}...`);
        }
    }

    /**
     * Configura la creación de eventos
     */
    setupEventCreation() {
        const createEventButton = document.querySelector('#events .btn-accent');
        
        if (createEventButton && createEventButton.textContent.includes('Crear Evento')) {
            createEventButton.addEventListener('click', () => {
                this.handleEventCreation();
            });
        }
    }

    /**
     * Maneja la creación de eventos
     */
    handleEventCreation() {
        const eventName = document.querySelector('#events input[placeholder*="Nombre"]')?.value;
        const eventLocation = document.querySelector('#events input[placeholder*="Ubicación"]')?.value;
        const eventDate = document.querySelector('#events input[type="date"]')?.value;
        const eventDescription = document.querySelector('#events textarea')?.value;
        
        if (eventName && eventLocation && eventDate && eventDescription) {
            alert(`Evento "${eventName}" creado exitosamente para el ${eventDate} en ${eventLocation}.`);
            this.clearEventForm();
        } else {
            alert('Por favor, completa todos los campos del evento.');
        }
    }

    /**
     * Limpia el formulario de creación de eventos
     */
    clearEventForm() {
        const inputs = document.querySelectorAll('#events input, #events textarea');
        inputs.forEach(input => {
            input.value = '';
        });
    }
}

/**
 * Función global para cambiar la foto principal del perro
 * @param {HTMLElement} element - Elemento de la miniatura clickeada
 */
function changeMainPhoto(element) {
    if (element.tagName === 'IMG') {
        const mainPhoto = document.getElementById('main-dog-photo');
        if (mainPhoto) {
            mainPhoto.src = element.src;
        }
    }
}

/**
 * Función para manejar la confirmación de asistencia a eventos
 * @param {HTMLElement} button - Botón de confirmación clickeado
 */
function confirmAttendance(button) {
    const eventCard = button.closest('.event-card');
    const eventTitle = eventCard.querySelector('h3')?.textContent;
    
    if (eventTitle) {
        alert(`¡Confirmada tu asistencia al evento "${eventTitle}"!`);
        button.textContent = '✓ Asistencia confirmada';
        button.disabled = true;
        button.style.backgroundColor = '#4CAF50';
    }
}

/**
 * Función para manejar la selección de opciones de raza
 * @param {HTMLElement} option - Opción de raza seleccionada
 */
function selectBreedOption(option) {
    // Remover selección previa
    document.querySelectorAll('.breed-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Marcar como seleccionada
    option.classList.add('selected');
    
    // Aquí se podría implementar la lógica de validación
    console.log(`Raza seleccionada: ${option.textContent}`);
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.dogMeetApp = new DogMeetApp();
});

// Exportar para uso en módulos si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DogMeetApp;
}
