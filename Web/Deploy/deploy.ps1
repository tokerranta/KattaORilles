try
{
    & dnvm use $env:dnxversion -arch x64
    & dnu publish --no-source --configuration Release --runtime dnx-clr-win-x64.$env:dnxversion 
}
catch
{
    Write-Error $_
    ##teamcity[buildStatus status='FAILURE']
    [System.Environment]::Exit(1)
}