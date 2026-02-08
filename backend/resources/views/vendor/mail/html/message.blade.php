<x-mail::layout>
    {{-- Header --}}
    <x-slot:header>
        <x-mail::header :url="config('app.email_logo_link_url')">
            @if($appLogo = config('app.email_logo_url'))
                <img src="{{ $appLogo }}" class="logo" alt="{{ config('app.name') }}"
                     style="max-width: 300px;">
            @else
                <img src="{{ config('app.frontend_url') }}/logos/brothersbit-stacked-light.png" class="logo" alt="{{ config('app.name') }}"
                     style="max-width: 300px;">
            @endif
        </x-mail::header>
    </x-slot:header>

    {{-- Body --}}
    {{ $slot }}

    {{-- Subcopy --}}
    @isset($subcopy)
        <x-slot:subcopy>
            <x-mail::subcopy>
                {{ $subcopy }}
            </x-mail::subcopy>
        </x-slot:subcopy>
    @endisset

    {{-- Footer --}}
    <x-slot:footer>
        <x-mail::footer>
            @if($appEmailFooter = config('app.email_footer_text'))
                {{ $appEmailFooter }}
            @else
                {{-- (c) BrothersBit 2025 --}}
                {{-- PLEASE NOTE: --}}
                {{-- This software is based on BrothersBit, licensed under the GNU Affero General Public License (AGPL) version 3. --}}
                {{-- You can find the full license text at: https://github.com/dsddet/Hi.Events/blob/main/LICENCE --}}

                © {{ date('Y') }} {{ config('app.name') }} | Powered by <a title="Manage events and sell tickets online with BrothersBit" href="https://brothersbit.com?utm_source=app-email-footer">BrothersBit</a>
            @endif
        </x-mail::footer>
    </x-slot:footer>
</x-mail::layout>
