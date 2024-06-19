# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestoraccount"
$skuName = "Standard_LRS" # Standard Locally-Redundant Storage

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind "StorageV2" `
                     -EnableHttpsTrafficOnly $true

Write-Host "Storage account $storageAccountName created successfully."