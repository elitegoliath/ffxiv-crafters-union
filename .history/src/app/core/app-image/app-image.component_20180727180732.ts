import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ImageFit = 'contain' | 'cover';

@Component({
    selector: 'app-image',
    templateUrl: './app-image.component.html',
    styleUrls: ['./app-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppImageComponent {

    private _src: string;

    public get src(): string {
        return this._src;
    }

    @Input()
    public set src(imgURL: string) {
        this.isLoading = true;
        this._src = imgURL;
    }

    @Input()
    public fit: ImageFit = 'cover';

    public isLoading = true;

    @Input()
    public isRound = false;

    public onLoaded() {
        this.isLoading = false;
    }
}
