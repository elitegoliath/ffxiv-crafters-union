import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ImageFit = 'contain' | 'cover';

@Component({
    selector: 'app-image',
    templateUrl: './app-image.component.html',
    styleUrls: ['./app-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppImageComponent {

    /**
     * Private reference of the source URL for the image.
     *
     * @private
     * @type {string}
     * @memberof AppImageComponent
     */
    private _src: string;

    /**
     * Getter for the source URL.
     *
     * @readonly
     * @type {string}
     * @memberof AppImageComponent
     */
    public get src(): string {
        return this._src;
    }

    /**
     * Setter and Input for the source URL.
     *
     * @memberof AppImageComponent
     */
    @Input()
    public set src(imgURL: string) {
        console.log('SOURCE: ', imgURL);
        this.isLoading = true;
        this._src = imgURL;
    }

    /**
     * This disctates how the image is displayed.
     *
     * @type {ImageFit}
     * @memberof AppImageComponent
     */
    @Input()
    public fit: ImageFit = 'cover';

    // TODO: Allow the image to be primarily within CSS using background-image.
    // This will allow us to use HostBindings to alter things with little need for TS.

    /**
     * Whether the image is still loading. This flag controls whether the loading spinner is displayed.
     *
     * @memberof AppImageComponent
     */
    public isLoading = true;

    /**
     * Whether the border is set to 50%.
     *
     * @memberof AppImageComponent
     */
    @Input()
    public isRound = false;

    /**
     * When the desired image derived from the src has loaded, trip the flag to switch from the loading spinner.
     *
     * @memberof AppImageComponent
     */
    public onLoaded() {
        this.isLoading = false;
    }
}
