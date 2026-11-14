[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter()]
    [switch]$OpenSocialTabs
)

$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $ScriptDir) { $ScriptDir = $PSScriptRoot }
Set-Location -Path $ScriptDir

function Start-SocialMediaCommandCenter {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [Parameter(ValueFromPipeline, ValueFromPipelineByPropertyName)]
        [string]$IndexPath = (Join-Path -Path $ScriptDir -ChildPath 'index.html'),

        [Parameter()]
        [switch]$LaunchSocials
    )

    begin {
        if (-not (Test-Path -Path $IndexPath)) {
            throw [System.IO.FileNotFoundException]::new("Could not locate Social Media Command Center index.html at $IndexPath")
        }
    }

    process {
        if ($PSCmdlet.ShouldProcess($IndexPath, 'Launch Social Media Command Center in Default Browser')) {
            Start-Process -FilePath $IndexPath
        }

        if ($LaunchSocials) {
            $targets = @(
                'https://www.threads.net',
                'https://www.facebook.com',
                'https://github.com/Chammin00',
                'https://chammin00.github.io/portfolio'
            )
            foreach ($url in $targets) {
                if ($PSCmdlet.ShouldProcess($url, 'Open Social Platform Tab')) {
                    Start-Process -FilePath $url
                }
            }
        }

        [PSCustomObject]@{
            Status            = 'Launched'
            CommandCenterPath = $IndexPath
            SocialTabsOpened  = [bool]$LaunchSocials
            Timestamp         = (Get-Date).ToString('o')
        }
    }

    end {}
}

Start-SocialMediaCommandCenter -LaunchSocials:$OpenSocialTabs
