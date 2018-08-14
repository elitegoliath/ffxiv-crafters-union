import { Injectable } from '@angular/core';
import { List, Stack } from 'immutable';
import { AppModalComponent } from '../core/app-modal/app-modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    // TODO: FocusTrap Management!!!! DAMNIT!

    /**
     * A list of modals registered to the service.
     *
     * @private
     * @type {List<AppModalComponent>}
     * @memberof ModalService
     */
    private _registeredModalList: List<AppModalComponent> = List<AppModalComponent>();

    /**
     * An immutable stack with a list of opened modals.
     *
     * @private
     * @type {Stack<AppModalComponent>}
     * @memberof ModalService
     */
    private _openModalStack: Stack<AppModalComponent> = Stack<AppModalComponent>();

    /**
     * Registers a modal by adding it to the registered modal list.
     *
     * @param {AppModalComponent} modal
     * @memberof ModalService
     */
    public registerModal(modal: AppModalComponent) {
        this._registeredModalList = this._registeredModalList.push(modal);
    }

    /**
     * Removes a modal from the registered modal list.
     *
     * @param {string} modalId
     * @memberof ModalService
     */
    public unregisterModal(modalId: string) {
        const modal = this._findModal(modalId);

        if (modal) {
            this._registeredModalList = this._registeredModalList.delete(this._registeredModalList.indexOf(modal));
        }
    }

    /**
     * Checks to see if a modal is open, if so, closes it.
     * Opens the specified modal, and adds it to the open modal stack.
     *
     * @param {string} modalId
     * @memberof ModalService
     */
    public openModal(modalId: string) {
        if (this._openModalStack.count()) {
            this._openModalStack.first().modalRef.close();
        }

        const modal = this._findModal(modalId);

        if (modal) {
            modal.modalRef.show();
            this._openModalStack = this._openModalStack.push(modal);
        }
    }

    /**
     * Closes the first modal on the stack, then removes it from the stack.
     * If there is another modal in the stack, it opens it.
     *
     * @memberof ModalService
     */
    public closeModal() {
        if (this._openModalStack.count()) {
            this._openModalStack.first().modalRef.close();
            this._openModalStack = this._openModalStack.pop();

            if (this._openModalStack.count()) {
                this._openModalStack.first().modalRef.show();
            }
        }
    }

    /**
     * Helper method that grabs the desired modal from the list.
     *
     * @private
     * @param {string} modalId
     * @returns {AppModalComponent}
     * @memberof ModalService
     */
    private _findModal(modalId: string): AppModalComponent {
        return this._registeredModalList.filter(m => m.modalId === modalId).first();
    }
}
